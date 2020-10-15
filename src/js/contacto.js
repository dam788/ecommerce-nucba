
const formulario = document.getElementById('form');
const boton = document.getElementById('publicar');
const nombre = document.getElementById('validationServer01');
const apellido = document.getElementById('validationServer02');
const email = document.getElementById('exampleInputEmail1');
const mensaje = document.getElementById('validationTextarea');
const menu = document.getElementById('menu');
const persiana = document.getElementById('persiana');
const sendNews = document.getElementById('btn4');
const newsMail = document.getElementById('newsMail');
const newsletter = [];
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




function message(alert) {
    return alert;
  }


const validMail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(newsMail.value.trim())) {
        message(alert('lindo email ...'));
        return true;
    }
    message(alert('Pone un mail conannn'));
    return false;
}

const addToNews = () => {
  let clienteA = newsMail.value;
  if(clienteA === '') { return null}
  yaEsta(clienteA)
  limpiaNewsl()
};

function yaEsta(value) {
  let cliente = value;
  if(validMail()){
    RepiteMail(cliente);
  }else{
    console.log('no es mail válido');
    return null;
  }
}

function RepiteMail(cliente){
  if (!newsletter.includes(cliente)) {
    newsletter.push(cliente);
    alert(`Te mantendremos al tanto de novedades a ${newsMail.value},gracias conan!`)
    return console.log(newsletter)
  } else {
    alert(`...pero ya estas en nuestra base de datos mostro!!`)
    return console.log('email repetido')
  }
}

function limpiaNewsl(){
  newsMail.value = '';
}

sendNews.addEventListener('click', addToNews);
