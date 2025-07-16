// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header header-transparent">
      <div className="logo">A k s h a y G Construction</div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <nav className="dropdown">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Work</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/press" onClick={() => setIsOpen(false)}>Press</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
