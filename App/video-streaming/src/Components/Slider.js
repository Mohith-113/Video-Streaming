<<<<<<< HEAD
<<<<<<< Updated upstream
import React from 'react';
=======
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';

// const Slider = () => {
//   return (
//     <Carousel style={{ height: '70vh', width: '100%' }}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/10-Best-Movies-on-Netflix-You-Didn---t-Know-Were-Made-By-Famous-Directors-amp-What-They---re-Known-For.jpg "
//           alt="First slide" 
//           style={{ height:'70vh'}}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://static0.thethingsimages.com/wordpress/wp-content/uploads/2020/01/scit-fi.jpg"
//           alt="Second slide"
//           style={{ height:'70vh'}}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/best-kids-movies-netflix.jpg"
//           alt="Third slide"
//           style={{ height:'70vh'}}
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;

import React, { useEffect, useState } from 'react';
>>>>>>> b41f3a48e3baef5e08e0de8e08016cbc679678fe
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/addmve')
      .then(response => response.json())
      .then(data => {
        const randomImages = getRandomImages(data, 4);
        setImages(randomImages);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getRandomImages = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <Carousel style={{ height: '70vh', width: '100vw' }}>
      <Carousel.Item >
          <img
            className="d-block w-100"
            src='https://res.cloudinary.com/djvcyin2i/image/upload/v1686922770/VS_nhqzb0.png'
            alt='Logo'
            style={{ height: '70vh' }}
          />
        </Carousel.Item>
      {images.map(movie => (
        <Carousel.Item key={movie._id}>
          <img
            className="d-block w-100"
            src={movie.flexiUrl}
            alt={movie.altText}
            style={{ height: '70vh' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
=======
import React, { useRef, useState } from 'react';
import A from './A.jpg'
import './Slider.css';

function Slider() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sliderRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="slider-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="slider" ref={sliderRef}>
        <div className="cards">
          <div className="card">
            <img src={A} alt="Card 1" />
          </div>
          <div className="card">
            <img src={A} alt="Card 2" />
          </div>
          <div className="card">
            <img src={A} alt="Card 3" />
          </div>
          <div className="card">
            <img src={A} alt="Card 4" />
          </div>
          <div className="card">
            <img src={A} alt="Card 5" />
          </div>
          <div className="card">
            <img src={A} alt="Card 6" />
          </div>
          <div className="card">
            <img src={A} alt="Card 7" />
          </div>
        </div>
      </div>
    </div>
>>>>>>> Stashed changes
  );
};

export default Slider;
<<<<<<< Updated upstream
=======


// import React, { useRef, useState } from 'react';
// import { Row, Col, Container, Button } from 'react-bootstrap';
// import './Slider.css';

// function Slider() {
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const sliderRef = useRef(null);

//   const handleSliderMove = (amount) => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollLeft += amount;
//       setScrollLeft(sliderRef.current.scrollLeft);
//     }
//   };

//   return (
//     <Container className="slider-container">
//       <Row>
//         <Col xs={1}>
//           <Button
//             variant="light"
//             className="slider-button"
//             onClick={() => handleSliderMove(-100)}
//           >
//             &lt;
//           </Button>
//         </Col>
//         <Col xs={10}>
//           <div className="slider" ref={sliderRef}>
//             <div className="cards">
//               <div className="card">
//                 <img src="card1.jpg" alt="Card 1" />
//               </div>
//               <div className="card">
//                 <img src="card2.jpg" alt="Card 2" />
//               </div>
//               <div className="card">
//                 <img src="card3.jpg" alt="Card 3" />
//               </div>
//               <div className="card">
//                 <img src="card4.jpg" alt="Card 4" />
//               </div>
//               <div className="card">
//                 <img src="card5.jpg" alt="Card 5" />
//               </div>
//               <div className="card">
//                 <img src="card6.jpg" alt="Card 6" />
//               </div>
//               <div className="card">
//                 <img src="card7.jpg" alt="Card 7" />
//               </div>
//             </div>
//           </div>
//         </Col>
//         <Col xs={1}>
//           <Button
//             variant="light"
//             className="slider-button"
//             onClick={() => handleSliderMove(100)}
//           >
//             &gt;
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Slider;


// import React, { useRef, useState } from 'react';
// import { Row, Col, Container, Button } from 'react-bootstrap';
// import './Slider.css';

// function Slider() {
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const sliderRef = useRef(null);

//   const handleSliderMove = (amount) => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollLeft += amount;
//       setScrollLeft(sliderRef.current.scrollLeft);
//     }
//   };

//   return (
//     <Container className="slider-container">
//       <Row>
//         <Col xs={1}>
//           <Button
//             variant="light"
//             className="slider-button"
//             onClick={() => handleSliderMove(-100)}
//           >
//             &lt;
//           </Button>
//         </Col>
//         <Col xs={10}>
//           <div className="slider" ref={sliderRef}>
//             <div className="cards">
//               <div className="card">
//                 <img src="card1.jpg" alt="Card 1" />
//               </div>
//               <div className="card">
//                 <img src="card2.jpg" alt="Card 2" />
//               </div>
//               <div className="card">
//                 <img src="card3.jpg" alt="Card 3" />
//               </div>
//               <div className="card">
//                 <img src="card4.jpg" alt="Card 4" />
//               </div>
//               <div className="card">
//                 <img src="card5.jpg" alt="Card 5" />
//               </div>
//               <div className="card">
//                 <img src="card6.jpg" alt="Card 6" />
//               </div>
//               <div className="card">
//                 <img src="card7.jpg" alt="Card 7" />
//               </div>
//             </div>
//           </div>
//         </Col>
//         <Col xs={1}>
//           <Button
//             variant="light"
//             className="slider-button"
//             onClick={() => handleSliderMove(100)}
//           >
//             &gt;
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Slider;
>>>>>>> Stashed changes
