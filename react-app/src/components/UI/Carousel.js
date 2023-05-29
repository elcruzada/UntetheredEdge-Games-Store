import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images, homepage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 5;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 5;
      return newIndex >= images.length ? 0 : newIndex;
    });
  };

  return (
    <div className="carousel">
      <button className="carousel__prev-button" onClick={goToPreviousSlide}>
        &lt;
      </button>
      {homepage ? (
        <div className="carousel__slide-container">
          {images
            .slice(currentIndex, currentIndex + 5)
            .map((image, index) => (
              <div
                key={index}
                className={`carousel__slide ${
                  index === currentIndex ? 'active' : ''
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <img
                  className='single-game-details-page-carousel-image'
                  src={image.preview}
                  // style={{ height: '7rem', borderRadius: '10px' }}
                />
              </div>
            ))}
        </div>
      ) : (
        <div className="carousel__slide-container">
          {images
            .slice(currentIndex, currentIndex + 5)
            .map((image, index) => (
              <div
                key={index}
                className={`carousel__slide ${
                  index === currentIndex ? 'active' : ''
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <img
                  className='single-game-details-page-carousel-image'
                  src={image.url}
                  // style={{ height: '7rem', borderRadius: '10px' }}
                />
              </div>
            ))}
        </div>
      )}
      <button className="carousel__next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
