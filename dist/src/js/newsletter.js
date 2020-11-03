const sendNews = document.getElementById('btn4');
const newsMail = document.getElementById('newsMail');
const newsletter = [];

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