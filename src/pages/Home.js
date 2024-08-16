import React from 'react';

import './IPhoneGuide.css'; // Ensure to add this line if you create a CSS file for additional styling
import iPhoneImage from './images/buyers-guide.jpg'; // Update with your image name

function Home() {
  return (
    <div className="image-container">
      <img src={iPhoneImage} alt="iPhone Guide" className="responsive-image" />
    </div>
  );
}

export default Home;
