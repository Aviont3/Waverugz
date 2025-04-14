import React from 'react';
import '../header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">My Gallery</h1>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
