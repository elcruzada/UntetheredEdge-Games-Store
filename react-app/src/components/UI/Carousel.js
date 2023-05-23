import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel__prev-button" onClick={goToPreviousSlide}>
        &lt;
      </button>
      <div className="carousel__slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <img src={image.url}
            style={{height: '7rem', borderRadius: '10px'}}
            />
        </div>
        ))}
      </div>
      <button className="carousel__next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
