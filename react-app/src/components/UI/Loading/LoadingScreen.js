// import loadingGif from '../../../images/loadingGif.gif'
// import './LoadingScreen.css'

// const LoadingScreen = () => {
//     return (
//         <>
//             {/* <div className="loading-text">Loading...</div> */}
//             <div className="loading-screen">
//                 <img src={loadingGif} alt="Loading" className="loading-gif" />
//             </div>
//         </>
//     );
// }

// export default LoadingScreen
// import React from 'react';
// import './LoadingScreen.css';

// const LoadingScreen = () => {
//   return (
//     <div className="loading-screen">
//       <div className="spinner"></div>
//       <div className="loading-text">Loading...</div>
//     </div>
//   );
// };

// export default LoadingScreen;
// import React from 'react';
// import './LoadingScreen.css';

// const LoadingScreen = () => {
//     return (
//         <>
//             <div className="loading-screen">
//             <h1 style={{ textAlign: 'center', color: 'white' }}>Loading. . .</h1>
//                 <div className="pulse-loader"></div>
//             </div>
//         </>
//     );
// };

// export default LoadingScreen;
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
        <h1 style={{color: '#C69749', fontSize: '6rem'}}>Loading</h1>
      <div className="blinking-dots">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
