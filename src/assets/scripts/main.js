/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.views-container');

  if (!container) {
    console.error('No se encontró el contenedor .views-container');
    return;
  }

  // Función para cargar una vista dinámica
  const loadView = async (view) => {
    console.log(view);
    try {
      const response = await fetch(`./views/${view}.html`);
      console.log(response);
      if (!response.ok) throw new Error('No se pudo cargar la vista');
      const html = await response.text();
      container.innerHTML = html; // Cargar el contenido HTML en el contenedor, me esta cargando index.html en lugar de la página que toca
    } catch (err) {
      container.innerHTML = '<p>Error al cargar la vista.</p>';
      console.error(err);
    }
  };

  // Función para manejar las rutas
  const handleRoute = () => {
    const hash = location.hash.slice(1) || 'home'; // Usar hash para definir la ruta, por defecto 'home'
    loadView(hash); // Cargar la vista correspondiente según el hash
  };

  // Añadir evento para cuando el hash cambie
  window.addEventListener('hashchange', handleRoute);

  // Cargar la vista inicial
  handleRoute();
});

