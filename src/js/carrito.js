const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  ".shoppingCartItemsContainer"
);

const arrCart = JSON.parse(localStorage.getItem("carrito")) || [];
let filterProd = [];

const dibujaProductos = () => {
  arrCart.map((art, indx) => {
    let { descripcion, precioDespues, img } = art;

    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${img} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${descripcion}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${precioDespues}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button" onclick="borrarCarr(this)" data-position="${indx}">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
  });
};
// let remover = shoppingCartRow.querySelector(".buttonDelete");

borrarCarr = (e) => {
  let objRemove = e.parentNode.parentNode.parentNode.parentNode;
  // objRemove.classlist.add = ''
  objRemove.remove();

  let equis = +e.dataset.position;
  let remove = arrCart.slice(equis, equis + 1);
  // let remove = arrCart[equis];
  // arrCart.pull(remove);
  console.log(remove);
  updateShoppingCartTotal();
};

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

  const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      ".shoppingCartItemPrice"
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace("$", "")
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      ".shoppingCartItemQuantity"
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}

dibujaProductos();
updateShoppingCartTotal();

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = "";
  updateShoppingCartTotal();
}

// storage
// let emailName = document.getElementById("userSesion").parentNode.parentNode;
let emailNameMovile = document.getElementById("userSesion2");
const storage = window.localStorage;
let subMenu = document.getElementsByClassName("menuFlotante")[0];

const StorageMail = () => {
  if (storage.getItem("userMail")) {
    let nameSesionMovile = `                    
    <span id="userSesion2" class="text-secondary">
          ${storage.getItem("userMail")}
          <i class="fas fa-user"></i>
          <button id ="exitMovile" class="remCart btn btn-sm btn-info">
            salir
          </button>
          </span>`;
    let nameSesion = `
        <a class="useActive">
        <span id="userSesion">
        ${storage.getItem("userMail")}
            <i class="fas fa-user"></i>
            </span>
            </a>
        `;
    emailName.innerHTML = nameSesion;
    emailNameMovile.innerHTML = nameSesionMovile;
  }
};
StorageMail();

emailName.addEventListener("click", () => {
  storage.getItem("userMail")
    ? subMenu.classList.toggle("visible")
    : subMenu.classList.remove("visible");
});

let exit = document.getElementById("exit");
let exitMovile = document.getElementById("exitMovile");

exit.addEventListener("click", () => {
  storage.clear();
  if (!storage.getItem("userMail")) {
    emailName.innerHTML = `
    <a class="session" href="/src/sesion.html">
            <span id="userSesion">
            Iniciar Sesion
            <i class="fas fa-user"></i>
            </span>
            </a>
            `;
    emailNameMovile.innerHTML = `
      <span id="userSesion2" class="text-secondary">
      Iniciar Sesion
        <i class="fas fa-user"></i>
        </span>
      `;
  }
  subMenu.classList.remove("visible");
});
exitMovile.addEventListener("click", () => {
  storage.clear();
  console.log(exit);
  if (!storage.getItem("userMail")) {
    emailName.innerHTML = `
        <a class="session" href="/src/sesion.html">
        <span id="userSesion">
                Iniciar Sesion
                <i class="fas fa-user"></i>
            </span>
            </a>
            `;
    emailNameMovile.innerHTML = `
    <span id="userSesion2" class="text-secondary">
        Iniciar Sesion
        <i class="fas fa-user"></i>
        </span>
      `;
  }
  subMenu.classList.remove("visible");
});
// storage
// })();
