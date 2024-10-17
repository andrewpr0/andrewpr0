import { useState } from 'react';
import Projectgrid from '../components/Projectgrid'; // Importa el componente Projectgrid
import Header from '../components/Header'; // Importa el Header

export default function Projects() {
  const [category, setCategory] = useState('concept-art'); // Categoría por defecto

  // Función para cambiar la categoría
  const onCategoryChange = (newCategory) => {
    setCategory(newCategory); // Cambiar la categoría cuando el usuario selecciona otra
  };

  return (
    <div>
      <Header onCategoryChange={onCategoryChange} /> {/* Pasar la función al header */}
      <Projectgrid category={category} /> {/* Pasar la categoría seleccionada */}
    </div>
  );
}