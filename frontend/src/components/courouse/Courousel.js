import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import sir from './sir.jpg'; // Replace with your actual image paths 
import img1 from'./img1.jpg'
import h1 from './h1.jpg'
import h2 from './h2.jpg'
import h3 from './h3.jpg'


import img3 from './img3.jpg'
import'./courousel.css'
const CarouselComponent = () => {
  return (
  
      <Carousel className='hi' autoPlay interval={1000} infiniteLoop showThumbs={false}>
        <div>
          <img className="mainimg" src={img1} alt="Image 1" />
        
        </div>
        <div>
          <img className="mainimg" src={h1} alt="Image 1" />
        
        </div>
        <div>
          <img className="mainimg" src={h2} alt="Image 1" />
        
        </div>
        <div>
          <img className="mainimg" src={h3} alt="Image 1" />
        
        </div>
        <div>
          <img className="mainimg" src={img3} alt="Image 1" />
        
        </div>
       
        <div>
          <img  className="mainimg" src={sir} alt="Image 3" />
         
        </div>
      </Carousel>
  
  );
};

export default CarouselComponent;
