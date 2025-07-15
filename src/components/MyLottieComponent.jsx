import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/images/herolottie.json'; // Your Lottie file



const MyLottieComponent = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Lottie animationData={animationData} loop={false} speed={0.1} />
    </div>
  );
};

export default MyLottieComponent;