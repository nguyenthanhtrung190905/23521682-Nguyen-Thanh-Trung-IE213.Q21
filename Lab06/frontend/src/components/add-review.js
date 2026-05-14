import React, { useState } from 'react';
import MovieDataService from "../services/movies";
import { Link, useParams, useLocation } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

const AddReview = props => {
  const { id } = useParams();
  const location = useLocation();
  
  let editing = false;
  let initialReviewState = "";

  if (location.state && location.state.currentReview) {
    editing = true;
    initialReviewState = location.state.currentReview.review;
  }

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = e => {
    setReview(e.target.value);
  };

  const saveReview = () => {
    var data = {
      review: review,
      name: props.user.name,
      user_id: props.user.id,
      movie_id: id
    };

    if (editing) {
      data.review_id = location.state.currentReview._id;
      MovieDataService.updateReview(data)
        .then(response => { setSubmitted(true); })
        .catch(e => { console.log(e); });
    } else {
      MovieDataService.createReview(data)
        .then(response => { setSubmitted(true); })
        .catch(e => { console.log(e); });
    }
  };

  return (
    <Container className="mt-3">
      {submitted ? (
        <div>
          <h4>Review submitted successfully!</h4>
          <Link to={"/movies/" + id} className="btn btn-success">Back to Movie</Link>
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
                {/* Đây là dòng chữ "Create Review" bạn thấy trong ảnh */}
                <h4>{editing ? "Edit" : "Create"} Review</h4>
            </Form.Label>
            
            {/* ĐÂY LÀ PHẦN QUAN TRỌNG: Ô NHẬP LIỆU PHẢI CÓ DÒNG NÀY */}
            <Form.Control
              type="text"
              required
              value={review}
              onChange={handleInputChange}
              placeholder="Viết đánh giá của bạn vào đây..."
            />
          </Form.Group>
          
          <Button variant="primary" onClick={saveReview}>
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AddReview;