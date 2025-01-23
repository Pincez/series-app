import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { db, collection, addDoc } from '../Firebase/firebase';

const AdminPanel = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    rating: '',
    genre: '',
    language: '',
    releaseDate: '',
    category: 'Movies',
  });

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'movies'), movieData);
    alert('Movie added successfully!');
    setMovieData({
      title: '',
      description: '',
      rating: '',
      genre: '',
      language: '',
      releaseDate: '',
      category: 'Movies',
    });
  };

  return (
    <Container>
      <h2 className="my-4">Admin Panel - Add New Movie</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={movieData.title} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={movieData.description} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" name="rating" value={movieData.rating} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" name="genre" value={movieData.genre} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="language">
          <Form.Label>Language</Form.Label>
          <Form.Control type="text" name="language" value={movieData.language} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="releaseDate">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" name="releaseDate" value={movieData.releaseDate} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" value={movieData.category} onChange={handleChange}>
            <option value="Movies">Movies</option>
            <option value="Series">Series</option>
            <option value="Kdrama">Kdrama</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Add Movie</Button>
      </Form>
    </Container>
  );
};

export default AdminPanel;
