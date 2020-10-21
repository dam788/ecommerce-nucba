
const formulario = document.getElementById('form');
const boton = document.getElementById('publicar');
const nombre = document.getElementById('validationServer01');
const apellido = document.getElementById('validationServer02');
const email = document.getElementById('exampleInputEmail1');
const mensaje = document.getElementById('validationTextarea');
const menu = document.getElementById('menu');
const persiana = document.getElementById('persiana');
// const sendNews = document.getElementById('btn4');
// const newsMail = document.getElementById('newsMail');
// const newsletter = [];
let   array = [];
class Usuario {
    constructor(nombre, apellido, email, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.mensaje = mensaje;
    }
}

const envioForm = (e) => {
    e.preventDefault();
    let client = new Usuario(nombre.value, apellido.value, email.value, mensaje.value);
    array.push(client);
    localStorage.setItem('datos', JSON.stringify(client));

    alert(`Usuario: ${client.nombre} ${client.apellido} muchas gracias por tu mensaje, estaremos contactandote a ${client.email} a la brevedad`);

    form.reset();

    console.log(array)
}

const desplegaMenu = () => {
  persiana.classList.toggle('active');
};

boton.addEventListener('click', envioForm);
menu.addEventListener('click', desplegaMenu);

