import Link from 'next/link';

export default function Header() {
  return (
    <nav className="nav-container">
      
      <ul className="nav-menu left">
          <li><a href="#concept-art">Concept Art</a></li>
           
      </ul>

      {/* Logo centrado */}
      <div className="logo">
          <a href="/">
              <img src="images/andrew icon.png" alt="Andres Sanchez"></img>
          </a>
      </div>

      {/* Espacio vacío a la derecha */} 
      <div className="empty-space"></div>
  </nav>
  );
}



