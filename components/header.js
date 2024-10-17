"use client";
import Link from 'next/link';

export default function Header({ onCategoryChange }) {
  return (
    <nav className="nav-container">
      <ul className="nav-menu left">
        {/*<li><button onClick={() => onCategoryChange('concept-art')}>Concept Art</button></li>
        <li><button onClick={() => onCategoryChange('3d-work')}>3D Work</button></li>*/}
      </ul>

      {/* Logo centrado */}
      <div className="logo">
        <a href="/">
          {/*<img src="images/andrew icon.png" alt="Andres Sanchez"></img>*/}
        </a>
      </div>

      {/* Espacio vacío a la derecha */}
      <div className="empty-space"></div>
    </nav>
  );
}



