"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '../lib/projects';

export default function Projectgrid() {
  const allProjects = getAllProjects();
  const [category, setCategory] = useState(null); // Categoría por defecto

  // Función para cambiar la categoría
  const onCategoryChange = (newCategory) => {
    setCategory(newCategory); // Cambiar la categoría cuando el usuario selecciona otra
  };
  const filteredProjects = category? allProjects.filter((project) => project.category === category): allProjects

  return (<>
  <nav className="nav-container">
      <ul className="nav-menu left">
        <li><button onClick={()=>onCategoryChange("concept-art")}>concept art</button></li>
        <li><button onClick={()=>onCategoryChange("3d-art")}>3d art</button></li>
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
    
    <div className="projects-grid">
        
      {filteredProjects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.id} className="project-item">
          <Image src={project.bannerImage} alt={project.title} width={1920} height={1080} />
          <div className="project-info">
            <h3>{project.title}</h3>
          </div>
        </Link>
      ))}
    </div>
    </>);
}