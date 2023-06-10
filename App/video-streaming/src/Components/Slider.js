import React from 'react'
import './slider.css'
import HeroSlider, { Slide } from 'hero-slider'


export default function Slider() {

    const Img1 = "https://i.ytimg.com/vi/oqcXT3tkZD0/maxresdefault.jpg";
    const Img2 = "https://assets-prd.ignimgs.com/2022/08/02/time-travel-movies-slideshow-1659475227004.jpg";
    const Img3 = "https://img.jagranjosh.com/images/2022/December/7122022/most-searched-movie.jpg";
    const Img4 = "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Best-South-Indian-movies.jpg";
  return (
    <div>
      <div className='Slider'>

        <HeroSlider
            slidingAnimation='left_to_right'
            orientation="horizantal"
            initialSlide={1}
            onBeforeChange={(previousSlide,nextSlide)=>console.log("onBeforeChange",previousSlide,nextSlide)}
            onChange={nextSlide => console.log("onChange",nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
            style={{
                backgroundColor:'rgba(0,0,0,0.3)'
            }}
            settings={{
                slidingDuration:250,
                slidingDelay:100,
                shouldAutoplay:true,
                shouldDisplayButtons:true,
                autoplayDuration:5000,
                height:"60vh"
            }}
        >
            <Slide
            background={{
                backgroundImage: Img1,
                backgroundAttachment:'fixed'
            }}
            />
            <Slide
            background={{
                backgroundImage: Img2,
                backgroundAttachment:'fixed'
            }}
            />
            <Slide
            background={{
                backgroundImage: Img3,
                backgroundAttachment:'fixed'
            }}
            />
            <Slide
            background={{
                backgroundImage: Img4,
                backgroundAttachment:'fixed'
            }}
            />
        </HeroSlider>

      </div>
    </div>
  )
}
