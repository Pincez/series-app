import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ maxWidth: '200px' }}
      />
      <Button variant="outline-light" type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
