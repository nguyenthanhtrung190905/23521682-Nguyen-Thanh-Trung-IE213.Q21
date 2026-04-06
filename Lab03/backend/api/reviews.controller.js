// Mã nguồn của Câu 2.2
import ReviewsDAO from '../dao/reviewsDAO.js';

// Khung class của Câu 2.1
export default class ReviewsController {
  
// Mã nguồn của Câu 2.3
  static async apiPostReview(req, res, next) {
    try {
      const movieId = req.body.movie_id;
      const review = req.body.review;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id 
      };
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.addReview(
        movieId,
        userInfo,
        review,
        date
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  // Mã nguồn của Câu 2.4
  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const review = req.body.review;
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id,
        review,
        date
      );

      var { error } = ReviewResponse;
      if (error) {
        // Tài liệu ghi res.status.json là sai cú pháp, phải sửa thành res.status(400).json
        res.status(400).json({ error }); 
      }

      // Kiểm tra xem database có dòng nào bị thay đổi không
      if (ReviewResponse.modifiedCount === 0) {
        throw new Error("unable to update review. User may not be original poster");
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  // Mã nguồn của Câu 2.5
  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const userId = req.body.user_id;
      
      const ReviewResponse = await ReviewsDAO.deleteReview(
        reviewId,
        userId
      );
      
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
