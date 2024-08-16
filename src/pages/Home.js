import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './IPhoneGuide.css'; // Ensure this file is in the correct path
import buyersImage from './images/buyers-guide.jpg'; // Update with your image name
import iPhoneImage from './images/iphone-guide.jpg';
import iPadImage from './images/ipad-guide.jpg';
import watchImage from './images/watch-guide.jpg';
import airpodsImage from './images/airpods-guide.jpg';
import macImage from './images/mac-guide.jpg';
import homeImage from './images/home-guide.jpg';
import visionImage from './images/vision-guide.jpg';
import accessoriesImage from './images/accessories-guide.jpg';

function IPhoneGuide() {
  return (
    <div className="image-container">
      <Link to="/">
        <img src={buyersImage} alt="Apple Guide" className="responsive-image" />
      </Link>
      <Link to="/iphone">
        <img src={iPhoneImage} alt="iPhone Guide" className="responsive-image" />
      </Link>
      <Link to="/ipad">
        <img src={iPadImage} alt="iPad Guide" className="responsive-image" />
      </Link>
      <Link to="/watch">
        <img src={watchImage} alt="Watch Guide" className="responsive-image" />
      </Link>
      <Link to="/airpods">
        <img src={airpodsImage} alt="AirPods Guide" className="responsive-image" />
      </Link>
      <Link to="/mac">
        <img src={macImage} alt="Mac Guide" className="responsive-image" />
      </Link>
      <Link to="/home">
        <img src={homeImage} alt="Home Guide" className="responsive-image" />
      </Link>
      <Link to="/vision">
        <img src={visionImage} alt="Vision Guide" className="responsive-image" />
      </Link>
      <Link to="/accessories">
        <img src={accessoriesImage} alt="Accessories Guide" className="responsive-image" />
      </Link>
    </div>
  );
}

export default IPhoneGuide;
