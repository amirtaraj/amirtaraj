import React from 'react';
import '../components/Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Amirtaraj</h1>
      <p>New Alert! Use the left hamburger menu to access the newly added Apple Buyers guide curated by @theapplehub.</p>
      <p>My Latest Videos - </p>
      <div className="video-container">
      <iframe width="320" height="190" src="https://www.youtube.com/embed/FRxbieyRO2A?si=Py_6LEYp2iBm0313" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="320" height="190" src="https://www.youtube.com/embed/dO299kHC0XI?si=C-lzyaZlK46EoGkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
      </div>
    </div>
  );
}

export default Home;
