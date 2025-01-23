import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import CardComponent from './CardComponent';

const API_KEY = '765513ad';  // Replace with your OMDb API key
const SEARCH_TERM = 'Marvel';    // Example search term (can be dynamic)

const CardGrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${SEARCH_TERM}&type=movie`);
        const data = await response.json();
        
        if (data.Response === "True") {
          setMovies(data.Search);
          setError('');
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Movie List</h2>
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={12} sm={12} md={6} lg={3} xl={2}>
            <CardComponent movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
