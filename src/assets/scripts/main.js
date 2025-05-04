/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';

import * as bootstrap from 'bootstrap';

(() => {
  const pathname = window.location.pathname;
  const page = pathname.split('/').pop().replace('.html', '') || 'index';

  // 1. Añadir clase al <body> según la página
  document.body.classList.add(`page-${page}`);

  // 2. Marcar como activa la opción del menú correspondiente
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && pathname.endsWith(href)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // Asegura que solo uno esté activo
    }
  });

  // 3. Añadir clase al footer solo si estás en la página de inicio
  const footerLinks = document.querySelectorAll('footer a');
  footerLinks.forEach(link => {
    if (page === 'index') {
      link.classList.add('footer-links--color');
    } else {
      link.classList.remove('footer-links--color');
    }
  });
})();


//Función onclick redirección
window.redirect = function(page) {
  window.location.href=`${page}`;
}


