import express from 'express';
import MoviesController from './movies.controller.js';
import ReviewsController from './reviews.controller.js'; // Import controller cho review

const router = express.Router(); 

router.route('/').get(MoviesController.apiGetMovies); 

// Câu 1.1 đến 1.4: Định tuyến cho các thao tác với review
router
  .route('/review')
  .post(ReviewsController.apiPostReview)
  .put(ReviewsController.apiUpdateReview)
  .delete(ReviewsController.apiDeleteReview);
// Mã nguồn của Câu 4.1
router.route("/id/:id").get(MoviesController.apiGetMovieById);
router.route("/ratings").get(MoviesController.apiGetRatings);
export default router;