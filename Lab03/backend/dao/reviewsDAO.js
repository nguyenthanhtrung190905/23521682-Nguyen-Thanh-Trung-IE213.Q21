// Mã nguồn Câu 3.1: Import thư viện và khai báo biến
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let reviews;

export default class ReviewsDAO {
  
  // Mã nguồn Câu 3.2: Hàm kết nối tới collection 'reviews'
  static async injectDB(conn) {
    if (reviews) { return; }
    try {
      reviews = await conn.db(process.env.MOVIEREVIEWS_NS).collection('reviews');
    } catch (e) {
      console.error(`unable to establish connection handle in reviewDAO: ${e}`);
    }
  }

  // Mã nguồn Câu 3.3: Hàm Thêm review
  static async addReview(movieId, user, review, date) {
    try {
      const reviewDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        review: review,
        movie_id: new ObjectId(movieId)
      }
      return await reviews.insertOne(reviewDoc);
    } catch (e) {
      console.error(`unable to post review: ${e}`);
      return { error: e };
    }
  }

  // Mã nguồn Câu 3.4: Hàm Sửa review
  static async updateReview(reviewId, userId, review, date) {
    try {
      const updateResponse = await reviews.updateOne(
        { user_id: userId, _id: new ObjectId(reviewId) },
        { $set: { review: review, date: date } }
      );
      return updateResponse;
    } catch (e) {
      console.error(`unable to update review: ${e}`);
      return { error: e };
    }
  }

  // Mã nguồn Câu 3.5: Hàm Xoá review
  static async deleteReview(reviewId, userId) {
    try {
      const deleteResponse = await reviews.deleteOne({
        _id: new ObjectId(reviewId),
        user_id: userId,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`unable to delete review: ${e}`);
      return { error: e };
    }
  }
}