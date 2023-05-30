// import React, { useState } from 'react';
// import './Carousel.css';
// import { useHistory } from 'react-router-dom';

// const Carousel = ({ images, homepage }) => {
//   const history = useHistory()
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlidehandler = () => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex - 4;
//       return newIndex < 0 ? images.length - 1 : newIndex;
//     });
//   };

//   const nextSlideHandler = () => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex + 4;
//       return newIndex >= images.length ? 0 : newIndex;
//     });
//   };

//   const detailsImageHandler = (id) => {
//     history.push(`/games/${id}`)
//   }

//   return (
//     <div className="carousel">
//       <button className="carousel__prev-button" onClick={prevSlidehandler}>
//         &lt;
//       </button>
//       {homepage ? (
//         <div className="carousel__slide-container">
//           {images
//             .slice(currentIndex + 6, currentIndex + 10)
//             .map((image, index) => (
//               <div
//                 key={index}
//                 className={`carousel__slide ${
//                   index === currentIndex ? 'active' : ''
//                 }`}
//                 // style={{ backgroundImage: `url(${image.url})` }}
//               >
//                 <img
//                   className='homepage-details-page-carousel-image'
//                   src={image.preview}
//                   onClick={() => detailsImageHandler(image.id)}
//                   // style={{ height: '7rem', borderRadius: '10px' }}
//                   />
//                 <div className="game-details">
//                 <p style={{color: 'gray', fontSize: '12px'}}>Base Game</p>
//                 <p className="game-name">{image.name}</p>
//                 <p className="game-price">${image.price}</p>
//               </div>
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div className="carousel2__slide-container">
//           {images
//             .slice(currentIndex, currentIndex + 4)
//             .map((image, index) => (
//               <div
//               key={index}
//               className={`carousel2__slide ${
//                 index === currentIndex ? 'active' : ''
//               }`}
//               // style={{ backgroundImage: `url(${image.url})` }}
//               >
//                 <img
//                 className='single-game-details-page-carousel-image'
//                   src={image.url}
//                   // style={{ height: '7rem', borderRadius: '10px' }}
//                 />
//               </div>
//             ))}
//         </div>
//       )}
//       <button className="carousel__next-button" onClick={nextSlideHandler}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState } from 'react';
import './Carousel.css';
import { useHistory } from 'react-router-dom';

const HomepageCarousel = ({ images }) => {
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlidehandler = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };

  const nextSlideHandler = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 4;
      return newIndex >= images.length ? 0 : newIndex;
    });
  };

  const detailsImageHandler = (id) => {
    history.push(`/games/${id}`);
  };

  return (
    <div className="carousel">
      <button className="carousel__prev-button" onClick={prevSlidehandler}>
        &lt;
      </button>
      <div className="carousel__slide-container">
        {images
          .slice(currentIndex + 6, currentIndex + 10)
          .map((image, index) => (
            <div
              key={index}
              className={`carousel__slide ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <img
                className="homepage-details-page-carousel-image"
                src={image.preview}
                onClick={() => detailsImageHandler(image.id)}
              />
              <div className="game-details">
                <p style={{ color: 'gray', fontSize: '12px' }}>Base Game</p>
                <p className="game-name">{image.name}</p>
                <p className="game-price">${image.price}</p>
              </div>
            </div>
          ))}
      </div>
      <button className="carousel__next-button" onClick={nextSlideHandler}>
        &gt;
      </button>
    </div>
  );
};





const SingleGameCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlidehandler = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };

  const nextSlideHandler = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 4;
      return newIndex >= images.length ? 0 : newIndex;
    });
  };

  return (
    <div className="carouse2l">
      <button className="carousel__prev-button" onClick={prevSlidehandler}>
        &lt;
      </button>
      <div className="carouse2l__slide-container">
        {images
          .slice(currentIndex, currentIndex + 4)
          .map((image, index) => (
            <div
              key={index}
              className={`carouse2l__slide ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <img
                className="single-game-details-page-carousel-image"
                src={image.url}
              />
            </div>
          ))}
      </div>
      <button className="carousel__next-button" onClick={nextSlideHandler}>
        &gt;
      </button>
    </div>
  );
};

export {HomepageCarousel, SingleGameCarousel};
