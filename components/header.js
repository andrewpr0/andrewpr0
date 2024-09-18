import Link from 'next/link';

export default function Header() {
  return (
    <nav className="nav-container">
        {/* Menú a la izquierda en horizontal */}
      
      <ul className="nav-menu left">
          <li><a href="#concept-art">Concept Art</a></li>
          <li><a href="#illustration">Art and Illustration</a></li>
          <li><a href="#3d-art">3D Art</a></li>
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



