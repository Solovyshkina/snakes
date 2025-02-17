import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">Распознаватель змей</Link>
      </div>
      <nav>
        <ul>
          <li>
            <button className="btn-secondary">
              <Link to="/snake-gallery">Галерея</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
