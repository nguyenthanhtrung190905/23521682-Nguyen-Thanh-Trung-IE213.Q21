import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let movies; 

export default class MoviesDAO {
  // Phương thức kết nối tới DB
  static async injectDB(connection) {
    if (movies) {
      return;
    }
    try {
      // Kết nối tới database và collection movies
      movies = await connection.db(process.env.MOVIEREVIEWS_NS).collection("movies");
    } catch (error) {
      console.error(`Unable to connect in MoviesDAO: ${error}`);
    }
  }

  // Phương thức lấy danh sách phim
  static async getMovies({ filters = null, page = 0, moviesPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("title" in filters) {
        query = { $text: { $search: filters["title"] } };
      } else if ("rated" in filters) {
        query = { rated: { $eq: filters["rated"] } };
      }
    }

    let cursor;
    try {
      // Thực hiện truy vấn với giới hạn và phân trang
      cursor = await movies.find(query).limit(moviesPerPage).skip(moviesPerPage * page);
      const moviesList = await cursor.toArray();
      const totalNumMovies = await movies.countDocuments(query);
      return { moviesList, totalNumMovies };
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return { moviesList: [], totalNumMovies: 0 };
    }
  }

  // ==========================================
  // PHẦN CODE MỚI CỦA CÂU 4.3 THÊM VÀO

  static async getMovieById(id) {
    try {
      return await movies.aggregate([
        {
          $match: { _id: new ObjectId(id) }
        },
        {
          $lookup: {
            from: 'reviews',
            localField: '_id',
            foreignField: 'movie_id',
            as: 'reviews'
          }
        }
      ]).next();
    } catch (e) {
      console.error(`something went wrong in getMovieById: ${e}`);
      throw e;
    }
  }

  // Phương thức lấy danh sách các loại rating
  static async getRatings() {
    let ratings = [];
    try {
      ratings = await movies.distinct("rated");
      return ratings;
    } catch (e) {
      console.error(`unable to get ratings, ${e}`);
      return ratings;
    }
  }
}