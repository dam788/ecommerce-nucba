let arrCart = JSON.parse(localStorage.getItem("carrito")) || [];
let filterProd = [];
const comprarButton = document.querySelector(".comprarButton");
const persiana = document.getElementById("persiana");

const shoppingCartItemsContainer = document.querySelector(
  ".shoppingCartItemsContainer"
);


const dibujaProductos = () => {
  arrCart.map((art) => {
    let {
      descripcion,
      precioDespues,
      img,
      id
    } = art;

    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `
  <div class="row shoppingCartItem p-3 m-3 bg-light rounded">
  <div class="col-7 d-flex p-0">
            <div class="shopping-cart-item d-flex align-items-center h-100 ">
                <img src=${img} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${descripcion}</h6>
                </div>
                </div>
        <div class="col-2 d-flex p-0">
            <div class="
              shopping-cart-price
              my-auto
              ">
                <p class="item-price mb-0 shoppingCartItemPrice">$ ${precioDespues}</p>
                </div>
                </div>
                <div class="col-3">
                <div class="
            shopping-cart-quantity 
            d-flex 
            justify-content-between 
            align-items-center 
            h-100 
            ">
            <p class="m-0">         
            <strong class="text-secondary">
            cantidad:
            </strong>
                  1</p>
                  <button class="btn btn-dark buttonDelete m-0 my-auto btn-right" type="button" onclick="borrarCarr(this)" data-position="${id}">X</button>
                  </div>
        </div>
        </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
  });
};

// -----------------

// console.log( array );

// ----------------
console.log(arrCart);
borrarCarr = (e) => {
  // --REMOVEMOS DEL DOM--
  let objRemove = e.parentNode.parentNode.parentNode.parentNode;

  objRemove.remove();

  let equis = e.dataset.position;

  let remove = arrCart.filter(obj => obj.id != equis)
  console.log(remove)
  // storage.setItem("carrito", JSON.stringify(arrCart));
  // arrCart = JSON.parse(localStorage.getItem("carrito"))

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
    const shoppingCartItemPrice = +shoppingCartItemPriceElement.textContent.replace("$", "");
    total = Math.abs(total + shoppingCartItemPrice);
  });
  shoppingCartTotal.innerHTML = `$${total}`;
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = "";
  updateShoppingCartTotal();
}

const desplegaMenu = () => {
  persiana.classList.toggle("active");
};

function init() {
  dibujaProductos();
  updateShoppingCartTotal();
  menu.addEventListener("click", desplegaMenu);
}
init();

comprarButton.addEventListener("click", comprarButtonClicked);