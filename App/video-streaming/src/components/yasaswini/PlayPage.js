// import React from 'react'
// import './Blocks.css'


// function PlayPage() {
//   return (
//     <section>
//     <div class="div3">
//       <a><img src={"https://image-resizer-cloud-api.akamaized.net/image/A98FB9D1-EE56-455D-A460-600BD454AA3E/0-16x9.jpg?width=2304"}/></a>
//       <br/>
//     </div>
//     <div class="div4">
//     <div class="div5">
//       <p class="para1">Premium</p>
//       <p class="para1">U/A</p>
//       <p class="para1">16+</p>
//     </div>
//         <h class="hd1">Unheard</h>
//         <p class="para2"><b>2023 • 1 Season • Political Drama<br/>Emotional • Political • Strong Language • Violence</b></p>
//         <p class="para3">Shiva and his journalist friends make money unethically in Madanapally by publishing false news stories and colluding with local politicians who control the town. Will they choose to stand up for the people of Madanapally, or will their greed and corruption lead them down a dark path? Watch to find out.</p>
//         <a class="b1" href="">Play Trailer</a>
//         <br/><br/><br/>
//         <br/><p1>Share</p1>
//         <div class="div6">
//           <a href="">Episodes</a>
//           <a href="">Cast</a>
//           <a href="">Details</a>
//         </div>
//         <hr/>
//         <br/>

        
//     </div>
    
//     </section>
//   )
// }
// export default PlayPage
// // As India became a nation, the citizens of Hyderabad witnessed the largest human struggle to break the chains of bondage. It,s time to listen to their voices.

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './Blocks.css'
const PlayPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const videoOptions = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
    },
  };

  return (
    <Container className='vid'>
      <Row className="justify-content-left">
        <Col xs={12} md={8}>
          <div
            className="video-wrapper"
            style={{ height: isHovered ? '70vh' : 'auto', width: '100vw' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? (
              <YouTube videoId="a4QCWxz-odw" opts={videoOptions} />
            ) : (
              <img
                src="https://image-resizer-cloud-api.akamaized.net/image/A98FB9D1-EE56-455D-A460-600BD454AA3E/0-16x9.jpg?width=2304"
                alt="Thumbnail" style={{ height:'70vh',width:'100%', }}
              />
            )}
          </div>
          
        </Col>
         
      </Row>
      <Row className='btm justify-content-left'>
      
      <div class="div4">
    <div class="div5">
        <p class="para1">Premium</p>
       <p class="para1">U/A</p>
       <p class="para1">16+</p>
     </div>
         <h class="hd1">Unheard</h>
         <p class="para2"><b>2023 • 1 Season • Political Drama<br/>Emotional • Political • Strong Language • Violence</b></p>
         <p class="para3">Shiva and his journalist friends make money unethically in Madanapally by publishing false news stories and colluding with local politicians who control the town. Will they choose to stand up for the people of Madanapally, or will their greed and corruption lead them down a dark path? Watch to find out.</p>
         <a class="b1" href="">Play Trailer</a>
         <br/><br/><br/>
         <hr/>
         </div>
      </Row>
    </Container>
  );
};

export default PlayPage;

