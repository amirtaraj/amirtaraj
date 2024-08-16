import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css'; // Ensure to create/update this CSS file for styling

const Breadcrumb = ({ isOpen, onClose }) => {
  return (
    <div className={`breadcrumb ${isOpen ? 'show' : ''}`}>
      <button className="breadcrumb-close" onClick={onClose}>
        ✕
      </button>
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/iphone" onClick={onClose}>iPhone Guide</Link>
      <Link to="/ipad" onClick={onClose}>iPad Guide</Link>
      <Link to="/accessories" onClick={onClose}>Accessories Guide</Link>
    </div>
  );
};

export default Breadcrumb;
