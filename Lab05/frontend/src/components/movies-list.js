import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';

const MoviesList = props => {
    // --- CÂU 2.1 ---
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchRating, setSearchRating] = useState("");
    const [ratings, setRatings] = useState(["All Ratings"]);

    // --- CÂU 2.2 ---
    useEffect(() => {
        retrieveMovies();
        retrieveRatings();
    }, []);

    const retrieveMovies = () => {
        MovieDataService.getAll()
            .then(response => {
                console.log(response.data);
                setMovies(response.data.movies);
            })
            .catch(e => { console.log(e); });
    }

    const retrieveRatings = () => {
        MovieDataService.getRatings()
            .then(response => {
                console.log(response.data);
                setRatings(["All Ratings"].concat(response.data));
            })
            .catch(e => { console.log(e); });
    }

    const onChangeSearchTitle = e => { setSearchTitle(e.target.value); }
    const onChangeSearchRating = e => { setSearchRating(e.target.value); }

    // --- CÂU 2.5: CÁC HÀM XỬ LÝ TÌM KIẾM ---
    const find = (query, by) => {
        MovieDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setMovies(response.data.movies);
            })
            .catch(e => { console.log(e); });
    }

    const findByTitle = () => {
        find(searchTitle, "title");
    }

    const findByRating = () => {
        if(searchRating === "All Ratings") {
            retrieveMovies();
        } else {
            find(searchRating, "rated");
        }
    }

    // --- GIAO DIỆN CỦA CÂU 2.3 VÀ 2.4 ---
    return (
        <Container>
            {/* CÂU 2.3: HIỂN THỊ FORM TÌM KIẾM */}
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control 
                                type="text" 
                                placeholder="Search by title" 
                                value={searchTitle} 
                                onChange={onChangeSearchTitle} 
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={findByTitle}>
                            Search
                        </Button>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control as="select" onChange={onChangeSearchRating}>
                                {ratings.map(rating => {
                                    return (
                                        <option value={rating} key={rating}>
                                            {rating}
                                        </option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={findByRating}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>

            {/* CÂU 2.4: HIỂN THỊ DANH SÁCH PHIM DƯỚI DẠNG CARD */}
            <Row className="mt-4">
                {movies.map((movie) => {
                    return(
                        <Col key={movie._id} className="pb-1">
                            <Card className="h-100">
                                <Card.Img src={movie.poster+"/100px180"}/>
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        Rating: {movie.rated}
                                    </Card.Text>
                                    <Card.Text>{movie.plot}</Card.Text>
                                    <Link to={"/movies/"+movie._id}>View Reviews</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default MoviesList;