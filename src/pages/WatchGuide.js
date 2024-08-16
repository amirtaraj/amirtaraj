// src/pages/IPhoneGuide.js
import React from 'react';
import './IPhoneGuide.css'; // Ensure to add this line if you create a CSS file for additional styling
import iPhoneImage from './images/watch-guide.jpg'; // Update with your image name

function WatchGuide() {
  return (
    <div className="image-container">
      <img src={iPhoneImage} alt="iPhone Guide" className="responsive-image" />
    </div>
  );
}

export default WatchGuide;
