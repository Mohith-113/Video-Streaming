import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel style={{ height: '70vh', width: '100%' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/10-Best-Movies-on-Netflix-You-Didn---t-Know-Were-Made-By-Famous-Directors-amp-What-They---re-Known-For.jpg "
          alt="First slide" 
          style={{ height:'70vh'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static0.thethingsimages.com/wordpress/wp-content/uploads/2020/01/scit-fi.jpg"
          alt="Second slide"
          style={{ height:'70vh'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/best-kids-movies-netflix.jpg"
          alt="Third slide"
          style={{ height:'70vh'}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
