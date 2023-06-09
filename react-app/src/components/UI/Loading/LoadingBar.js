import React, { useState, useEffect } from 'react';

const LoadingBar = ({handleClick, isLoading}) => {
  const [progress, setProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isLoading) {
      intervalId = setInterval(() => {
        // setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        setProgress((prevProgress) => {
            const nextProgress = prevProgress + 13;
            return nextProgress >= 100 ? 100 : nextProgress;
        });
      }, 300);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading]);

//   const handleClick = () => {
//     setIsLoading(true);
//   };

  return (


      <div className="loading-bar"
      style={{width: '30rem'}}
      >
        <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: 'white', height: '5rem', borderRadius: '10px', textAlign: 'center' }}>
        <h2>{progress}%</h2>
        </div>
      </div>

  );
};

export default LoadingBar;
