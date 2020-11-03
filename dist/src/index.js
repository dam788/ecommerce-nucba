import './css/general.css';
import './styles.css';
import './css/header.css';
import './css/footer.css';
import './css/index.css';
import './assets/logo.svg';
import './js/newsletter.js';
import './js/all.min';
import './js/storage';

const menu = document.getElementById('menu');
const persiana = document.getElementById('persiana');

const desplegaMenu = () => {
  persiana.classList.toggle('active');
};

menu.addEventListener('click', desplegaMenu);
