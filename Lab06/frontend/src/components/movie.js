import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link } from 'react-router-dom';
import { Card, Container, Image, Col, Row, Button, Media } from 'react-bootstrap';
import moment from 'moment'; // Thư viện dùng cho câu 4.2

const Movie = props => {
  // Câu 3.1: Khởi tạo biến trạng thái movie
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: []
  });

  // Câu 3.2: Hàm lấy dữ liệu phim chi tiết từ Backend
  const getMovie = id => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Tự động gọi hàm getMovie khi Component được hiển thị
  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      {/* Câu 3.3: Giao diện hiển thị chi tiết phim */}
      <Container>
        <Row>
          <Col>
            <Image src={movie.poster + "/100px250"} fluid />
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {/* Nút thêm Review - Chỉ hiện khi đã đăng nhập */}
                {props.user && (
                  <Link to={"/movies/" + props.match.params.id + "/review"}>
                    Add Review
                  </Link>
                )}
              </Card.Body>
            </Card>
            <br />
            <h2>Reviews</h2>

            {/* Câu 4.1: Vòng lặp hiển thị danh sách các review */}
            {movie.reviews.map((review, index) => {
              return (
                <Media key={index} className="mb-3">
                  <Media.Body>
                    <h5>
                      {review.name + " reviewed on "}
                      {/* Câu 4.2: Định dạng ngày tháng bằng moment */}
                      {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p>{review.review}</p>
                    
                    {/* Kiểm tra: Nếu đúng là người viết review thì hiện nút Sửa/Xóa */}
                    {props.user && props.user.id === review.user_id && (
                      <Row>
                        <Col>
                          <Link to={{
                            pathname: "/movies/" + props.match.params.id + "/review",
                            state: { currentReview: review }
                          }}>Edit</Link>
                        </Col>
                        <Col>
                          <Button variant="link">Delete</Button>
                        </Col>
                      </Row>
                    )}
                  </Media.Body>
                </Media>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;