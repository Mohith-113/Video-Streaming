import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const MovieGroup = () => {
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description for Movie 1',
      imageUrl: 'https://picfiles.alphacoders.com/390/390919.jpg'
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description for Movie 2',
      imageUrl: 'https://picfiles.alphacoders.com/141/141078.jpg'
    },
    {
        id: 1,
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: 'https://picfiles.alphacoders.com/390/390919.jpg'
      },
      {
        id: 2,
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: 'https://picfiles.alphacoders.com/141/141078.jpg'
      },
      {
        id: 1,
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: 'https://picfiles.alphacoders.com/390/390919.jpg'
      },
      {
        id: 2,
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: 'https://picfiles.alphacoders.com/141/141078.jpg'
      },
      
    // Add more movie objects here
  ];

  return (
    <div style={{ padding: '20px 0' }}>
        
      <Container>
      <h1>English Movies</h1>
        <Row className='scrolling-wrapper'>
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-4 custom-card " >
              {/* <Link to="/PlayPage"> <Card.Img variant="top"  src={movie.imageUrl} alt={movie.title} style={{ height: '300px', objectFit: 'cover' }} /></Link> */}
              <NavLink eventKey='6' as={Link} to="/PlayPage"><Card.Img variant="top"  src={movie.imageUrl} alt={movie.title} style={{ height: '300px', objectFit: 'cover' }} /></NavLink>
              {/* <Card.Img variant="top"  src={movie.imageUrl} alt={movie.title} style={{ height: '300px', objectFit: 'cover' }} /> */}
              
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MovieGroup;
