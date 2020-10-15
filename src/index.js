import './css/general.css';
import './js/all.min.js'
import './styles.css';
import './css/header.css'
import './css/footer.css'
import './css/index.css'
import './assets/logo.svg'

const menu = document.getElementById('menu');
const persiana = document.getElementById('persiana');

const desplegaMenu = () => {
  persiana.classList.toggle('active');
};

menu.addEventListener('click', desplegaMenu);

