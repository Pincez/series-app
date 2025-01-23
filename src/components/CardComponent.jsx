import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const CardComponent = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card
      className="h-100 shadow-sm text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <Card.Img 
        variant="top" 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} 
        alt={movie.Title} 
      />
      <Card.Body>
        <Card.Title className="text-truncate" title={movie.Title} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {movie.Title}
        </Card.Title>
        {isHovered && (
          <div className="d-flex justify-content-between align-items-center bg-dark text-white p-2 mt-2" style={{ borderRadius: '5px' }}>
            <span>⭐ {movie.imdbRating || 'N/A'}</span>
            <Button 
              variant="link" 
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-0"
            >
              <FaHeart color={isFavorite ? 'red' : 'white'} size={24} />
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
