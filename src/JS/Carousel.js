import React from "react";
import "../CSS/Carousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../Media/banner1.jpg'
import image2 from '../Media/banner3.jpg'
import image3 from '../Media/bannerE.jpg'
import image4 from '../Media/bannerMSME.jpg'


export default function App() {
  return (
    <div className="carousel">
     <AliceCarousel autoPlay autoPlayInterval="500">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}
