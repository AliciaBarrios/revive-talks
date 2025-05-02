/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';

import dirArticle from '../../views/article.html';
import dirContact from '../../views/contact.html';
import dirArtists from '../../views/artists.html';
import dirHome from '../../views/home.html';

import * as bootstrap from 'bootstrap';

const vistas = {
  article: dirArticle,
  contact: dirContact,
  artists: dirArtists,
  home: dirHome
};


/**
 * Write any other JavaScript below
 */

// Función para cargar una vista dinámica
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.views-container');

  if (!container) {
    console.error('No se encontró el contenedor .views-container');
    return;
  }

  // Función para cargar una vista dinámica
  const loadView = async (view) => {
    try {
      const url = vistas[view]; 
      const response = await fetch(url);
      if (!response.ok) throw new Error('No se pudo cargar la vista');
      const html = await response.text();
      container.innerHTML = html;
    } catch (err) {
      container.innerHTML = '<p>Error al cargar la vista.</p>';
    }
  };

  // Función para manejar las rutas
  const handleRoute = () => {
    const hash = location.hash.slice(1) || 'home'; // Usar hash para definir la ruta, por defecto 'home'
    // Eliminar clase 'active' de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    // Añadir clase 'active' al enlace correspondiente
    const activeLink = document.querySelector(`.nav-link[href="#${hash}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }

    // Añadir o quitar clase al footer según la vista
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
      if (hash === 'home') {
        link.classList.add('footer-links--color');
      } else {
        link.classList.remove('footer-links--color');
      }
    });


    loadView(hash); // Cargar la vista correspondiente según el hash
  };

  // Añadir evento para cuando el hash cambie
  window.addEventListener('hashchange', handleRoute);

  // Cargar la vista inicial
  handleRoute();
});




