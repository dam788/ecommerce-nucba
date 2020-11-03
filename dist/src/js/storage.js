const storage = window.localStorage;
let storageCart = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(storageCart)
let mailName = document.getElementById("userSesion").parentNode.parentNode;
let mailNameMovile = document.getElementById("userSesion2");
let subMenu = document.getElementsByClassName("menuFlotante")[0];
let cartNum = document.getElementById("cartNum");
let cartNum2 = document.getElementById("cartNum2");

const carrito = () => {
  cartNum.innerHTML = `${storageCart.length}</i>`;
  cartNum2.innerHTML = `${storageCart.length}<i class="fas fa-shopping-cart"></i>`;
};

const StorageMail = () => {
  if (storage.getItem('userMail')) {
    let nameSesionMovile = `                    
        <span id="userSesion2" class="text-secondary">
          ${storage.getItem('userMail')}
          <i class="fas fa-user"></i>
          <button id ="exitMovile" class="remCart btn btn-sm btn-info">
            salir
          </button>
        </span>`;
    let nameSesion = `
        <a class="useActive">
          <span id="userSesion">
            ${storage.getItem('userMail')}
            <i class="fas fa-user"></i>
          </span>
        </a>
        `;
    mailName.innerHTML = nameSesion;
    mailNameMovile.innerHTML = nameSesionMovile;
  }
};
StorageMail();

mailName.addEventListener("click", () => {
  storage.getItem("userMail")
    ? subMenu.classList.toggle("visible")
    : subMenu.classList.remove("visible");
});

let exit = document.getElementById("exit");
let exitMovile = document.getElementById("exitMovile");

exit.addEventListener("click", () => {
  limpiarStorage();
  cartNum.innerHTML = '0';
  cartNum2.innerHTML = '0 <i class="fas fa-shopping-cart"></i>';
  if (!storage.getItem("userMail")) {
    mailName.innerHTML = `
    <a class="session" href="/src/sesion.html">
    <span id="userSesion">
    Iniciar Sesion
    <i class="fas fa-user"></i>
    </span>
    </a>
    `;
    mailNameMovile.innerHTML = `
    <span id="userSesion2" class="text-secondary">
    Iniciar Sesion
    <i class="fas fa-user"></i>
    </span>
        `;
  }
  subMenu.classList.remove("visible");
});

exitMovile.addEventListener("click", () => {
  limpiarStorage();
  if (!storage.getItem("userMail")) {
    mailName.innerHTML = `
    <a class="session" href="/src/sesion.html">
    <span id="userSesion">
    Iniciar Sesion
    <i class="fas fa-user"></i>
            </span>
            </a>
        `;
    mailNameMovile.innerHTML = `
        <span id="userSesion2" class="text-secondary">
        Iniciar Sesion
        <i class="fas fa-user"></i>
        </span>
        `;
  }
  subMenu.classList.remove("visible");
});

const limpiarStorage = () => {
  return window.localStorage.clear();
}

StorageMail();
carrito();