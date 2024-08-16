import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import IPhoneGuide from './pages/IPhoneGuide';
import IPadGuide from './pages/IPadGuide';
import AccessoriesGuide from './pages/AccessoriesGuide';
import WatchGuide from './pages/WatchGuide';
import AirPodsGuide from './pages/AirPodsGuide';
import MacGuide from './pages/MacGuide';
import HomeGuide from './pages/HomeGuide';
import VisionGuide from './pages/VisionGuide';
import './theme.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [breadcrumbOpen, setBreadcrumbOpen] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  const toggleBreadcrumb = () => {
    setBreadcrumbOpen(!breadcrumbOpen);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <button className="hamburger-menu" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
            <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
            <li><Link to="/iphone" onClick={handleMenuClick}>iPhone Guide</Link></li>
            <li><Link to="/ipad" onClick={handleMenuClick}>iPad Guide</Link></li>
            <li><Link to="/watch" onClick={handleMenuClick}>Watch Guide</Link></li>
            <li><Link to="/airpods" onClick={handleMenuClick}>AirPods Guide</Link></li>
            <li><Link to="/mac" onClick={handleMenuClick}>Mac Guide</Link></li>
            <li><Link to="/home" onClick={handleMenuClick}>Home Guide</Link></li>
            <li><Link to="/vision" onClick={handleMenuClick}>Vision Guide</Link></li>
            <li><Link to="/accessories" onClick={handleMenuClick}>Accessories Guide</Link></li>
          </ul>
          <button className="theme-switcher" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '🌞'}
          </button>
        </nav>
        <div className={`breadcrumb ${breadcrumbOpen ? 'show' : ''}`}>
          <button className="breadcrumb-close" onClick={toggleBreadcrumb}>✕</button>
          <Link to="/" onClick={() => { setBreadcrumbOpen(false); }}>Home</Link>
          <Link to="/iphone" onClick={() => { setBreadcrumbOpen(false); }}>iPhone Guide</Link>
          <Link to="/ipad" onClick={() => { setBreadcrumbOpen(false); }}>iPad Guide</Link>
          <Link to="/watch" onClick={() => { setBreadcrumbOpen(false); }}>Watch Guide</Link>
          <Link to="/airpods" onClick={() => { setBreadcrumbOpen(false); }}>AirPods Guide</Link>
          <Link to="/mac" onClick={() => { setBreadcrumbOpen(false); }}>Mac Guide</Link>
          <Link to="/home" onClick={() => { setBreadcrumbOpen(false); }}>Home Guide</Link>
          <Link to="/vision" onClick={() => { setBreadcrumbOpen(false); }}>Vision Guide</Link>
          <Link to="/accessories" onClick={() => { setBreadcrumbOpen(false); }}>Accessories Guide</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<IPhoneGuide />} />
          <Route path="/ipad" element={<IPadGuide />} />
          <Route path="/watch" element={<WatchGuide />} />
          <Route path="/airpods" element={<AirPodsGuide />} />
          <Route path="/mac" element={<MacGuide />} />
          <Route path="/home" element={<HomeGuide />} />
          <Route path="/vision" element={<VisionGuide />} />
          <Route path="/accessories" element={<AccessoriesGuide />} />
        </Routes>
        
        <div className="subscribe-container">
          <a 
            className="subscribe-button" 
            href="https://www.youtube.com/amirtaraj?sub_confirmation=1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Subscribe for more!
          </a>
        </div>
       
        <footer className="bottom-bar">
          <Link to="/contact-us" className="footer-link">Last Updated: 20240816</Link>
          <div className="social-media-links">
            <a href="https://www.facebook.com/amirtaraj.r/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/amirtaraj" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/amirtaraj/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/amirtaraj/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
