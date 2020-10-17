(() => {
  // productos
  let productos = [];

  class Producto {
    constructor(
      id,
      categoria,
      producto,
      descripcion,
      precioAntes,
      precioDespues,
      img
    ) {
      this.id = id;
      this.categoria = categoria;
      this.producto = producto;
      this.descripcion = descripcion;
      this.precioAntes = precioAntes;
      this.precioDespues = precioAntes - (precioAntes * precioDespues) / 100;
      this.img = img;
    }
  }

  function agregarProducto(Producto) {
    let produ = Producto;
    productos.push(produ);
  }

  const java = new Producto(
      "1",
      "remera",
      "java",
      "mellange java",
      1200,
      50,
      "./assets/productos/remer1.jpg"
    ),
    nasa = new Producto(
      "2",
      "remera",
      "nasa",
      "producto especial",
      1200,
      50,
      "./assets/productos/remer2.jpg"
    ),
    Github = new Producto(
      "3",
      "remera",
      "Github",
      "remera github",
      1500,
      50,
      "./assets/productos/remer3.jpg"
    ),
    jsMinimalistRem = new Producto(
      "4",
      "remera",
      "js minimalist",
      "pequeño logo",
      1000,
      50,
      "./assets/productos/remer4.jpg"
    ),
    go = new Producto(
      "5",
      "remera",
      "GO!",
      "remera golang celeste",
      1700,
      50,
      "./assets/productos/remer5.jpg"
    ),
    git = new Producto(
      "6",
      "remera",
      "GIT",
      "remera gris git",
      1300,
      50,
      "./assets/productos/remer6.jpg"
    ),
    remeraAndroid = new Producto(
      "7",
      "remera",
      "droid",
      "remera android",
      1700,
      50,
      "./assets/productos/remer7.jpg"
    ),
    kotlin = new Producto(
      "8",
      "remera",
      "kotlin",
      "flotlin soft",
      1800,
      50,
      "./assets/productos/remer8.jpg"
    ),
    batikGo = new Producto(
      "9",
      "buzo",
      "batik go",
      "batik largo",
      3500,
      10,
      "./assets/productos/buzo1.jpg"
    ),
    batikGit = new Producto(
      "10",
      "buzo",
      "batik git",
      "batik largo",
      3500,
      10,
      "./assets/productos/buzo2.jpg"
    ),
    jsMinimalistBuz = new Producto(
      "11",
      "buzo",
      "js minimalist",
      "pequeño logo ",
      3500,
      10,
      "./assets/productos/buzo3.jpg"
    ),
    buzoAndroid = new Producto(
      "12",
      "buzo",
      "droid",
      "buzo android",
      3500,
      10,
      "./assets/productos/buzo4.jpg"
    ),
    buzoKotlinColor = new Producto(
      "13",
      "buzo",
      "Kotlin",
      "buzo kotlin color",
      3200,
      10,
      "./assets/productos/buzo5.jpg"
    ),
    nodeMinimalist = new Producto(
      "14",
      "buzo",
      "node minimalist",
      "node minimalist",
      3200,
      10,
      "./assets/productos/buzo6.jpg"
    ),
    buzoJavascript = new Producto(
      "15",
      "buzo",
      "js negro",
      "buzo javascript",
      3200,
      10,
      "./assets/productos/buzo7.jpg"
    ),
    kotlinNegro = new Producto(
      "16",
      "buzo",
      "kotlin negro",
      "buzo negro logo color",
      3200,
      10,
      "./assets/productos/buzo8.jpg"
    ),
    buzoNucba = new Producto(
      "17",
      "buzo",
      "buzo nucba",
      "buzo especial nucba",
      4000,
      10,
      "./assets/productos/buzo9.jpg"
    ),
    gorraJava = new Producto(
      "18",
      "gorra",
      "gorra java",
      "bordado java",
      1200,
      25,
      "./assets/productos/gorra1.jpg"
    ),
    gorraC = new Producto(
      "19",
      "gorra",
      "c++",
      "estampa c++",
      1200,
      25,
      "./assets/productos/gorra2.jpg"
    ),
    gorraCode = new Producto(
      "20",
      "gorra",
      "gorra code",
      "estampa code",
      1200,
      25,
      "./assets/productos/gorra3.jpg"
    ),
    gorraDroid = new Producto(
      "21",
      "gorra",
      "gorra droid",
      "estampado android",
      1200,
      25,
      "./assets/productos/gorra4.jpg"
    ),
    gorraNucba = new Producto(
      "22",
      "gorra",
      "gorra nucba",
      "logo especial nucba",
      1200,
      25,
      "./assets/productos/gorra5.jpg"
    ),
    gorraJs = new Producto(
      "23",
      "gorra",
      "gorra js",
      "estampa javascript",
      1200,
      25,
      "./assets/productos/gorra6.jpg"
    ),
    padCheatJs = new Producto(
      "24",
      "pad",
      "pad js",
      "cheats js",
      600,
      15,
      "./assets/productos/pad1.jpg"
    ),
    padLogoJs = new Producto(
      "25",
      "pad",
      "pad js",
      "logo js",
      600,
      15,
      "./assets/productos/pad2.jpg"
    ),
    padGit = new Producto(
      "26",
      "pad",
      "pad git",
      "cheats git",
      600,
      15,
      "./assets/productos/pad3.jpg"
    ),
    padLinux = new Producto(
      "27",
      "pad",
      "pad linux",
      "cheats linux",
      600,
      15,
      "./assets/productos/pad4.jpg"
    ),
    padMario = new Producto(
      "28",
      "pad",
      "pad mario",
      "estampa mario bros",
      600,
      15,
      "./assets/productos/pad5.jpg"
    ),
    riñoneraKitNucba = new Producto(
      "29",
      "bolso",
      "riñonera kit nucba",
      "",
      6700,
      30,
      "./assets/productos/prod8.jpg"
    ),
    bolsoGoCel = new Producto(
      "30",
      "bolso",
      "bolso go",
      "golang celeste",
      2700,
      2199,
      "./assets/productos/prod1.jpg"
    ),
    bolsoGoHistorieta = new Producto(
      "31",
      "bolso",
      "bolso go",
      "go historieta",
      2700,
      30,
      "./assets/productos/prod2.jpg"
    ),
    bolsoGo3d = new Producto(
      "32",
      "bolso",
      "bolso go",
      "go en 3d",
      2700,
      30,
      "./assets/productos/prod3.jpg"
    ),
    bolsoJsEstampa = new Producto(
      "33",
      "bolso",
      "bolso js",
      "estampa javascript",
      2700,
      30,
      "./assets/productos/prod4.jpg"
    ),
    mochilaJs = new Producto(
      "34",
      "bolso",
      "mochila js",
      "amarilla especial",
      5000,
      30,
      "./assets/productos/prod5.jpg"
    ),
    bolsoJsNode = new Producto(
      "35",
      "bolso",
      "bolso js",
      "js node",
      2700,
      30,
      "./assets/productos/prod6.jpg"
    ),
    bolsoWp = new Producto(
      "36",
      "bolso",
      "bolso wp",
      "motivo wordpress",
      2700,
      30,
      "./assets/productos/prod7.jpg"
    );

  agregarProducto(java);
  agregarProducto(nasa);
  agregarProducto(Github);
  agregarProducto(jsMinimalistRem);
  agregarProducto(go);
  agregarProducto(git);
  agregarProducto(remeraAndroid);
  agregarProducto(kotlin);
  agregarProducto(batikGo);
  agregarProducto(batikGit);
  agregarProducto(jsMinimalistBuz);
  agregarProducto(buzoAndroid);
  agregarProducto(buzoKotlinColor);
  agregarProducto(nodeMinimalist);
  agregarProducto(buzoJavascript);
  agregarProducto(kotlinNegro);
  agregarProducto(buzoNucba);
  agregarProducto(gorraJava);
  agregarProducto(gorraC);
  agregarProducto(gorraCode);
  agregarProducto(gorraDroid);
  agregarProducto(gorraNucba);
  agregarProducto(gorraJs);
  agregarProducto(padCheatJs);
  agregarProducto(padLogoJs);
  agregarProducto(padGit);
  agregarProducto(padLinux);
  agregarProducto(padMario);
  agregarProducto(riñoneraKitNucba);
  agregarProducto(bolsoGoCel);
  agregarProducto(bolsoGoHistorieta);
  agregarProducto(bolsoGo3d);
  agregarProducto(bolsoJsEstampa);
  agregarProducto(mochilaJs);
  agregarProducto(bolsoJsNode);
  agregarProducto(bolsoWp);

  // selectores
  const insertProducts = document.getElementById("insertProducts"),
    input = document.getElementsByClassName("inputBusca")[0],
    formulario = document.querySelector("form"),
    menu = document.getElementById("menu"),
    persiana = document.getElementById("persiana"),
    hiddeNucba = document.querySelector(".mainSection"),
    findNucba = document.getElementById("findNucba");
  let filterProd = [],
    arrCart = JSON.parse(localStorage.getItem("carrito")) || [];

  const dibujaProductos = () => {
    productos.map((prod, indx) => {
      let items = `
        <div id="prod_#" class="boxProduct">
        <div class="imgProduct" alt="imagen de producto">
        <img class="boxForm" src="${prod.img}">
                <h3 class="precio">
                <small>$${prod.precioAntes}</small>
                $${prod.precioDespues}
                </h3>
                </div>
                <div class="pieBox">
                <div class="titleSubtitle">
                <h3 class="nombreProd">${prod.producto}</h3>
                <small class="descProd">${prod.descripcion}</small>
                </div>
                <button class="btnCart" onclick="addToCart(this)" data-position="${indx}">
                <i class="fas fa-shopping-cart"></i>
                </button>
                </div>
                </div>
                `;
      return (insertProducts.innerHTML += items);
    });
  };

  const fitrar = (e) => {
    let filtrado, inputFind, noResults, items;

    e.preventDefault();

    inputFind = input.value;
    if (!inputFind) {
      return;
    }

    filtrado = productos.filter(
      (prod) =>
        prod.producto.includes(inputFind) || prod.categoria.includes(inputFind)
    );
    filterProd.push(filtrado);
    limpiarForm();
    insertProducts.innerHTML = `<h2>${inputFind.toUpperCase()}</h2>`;
    if (filtrado == "") {
      noResults = `
                  <div  class="noResults">
                      <img src="./assets/no_results.svg"></img>
                      </div>
                  `;
      return (insertProducts.innerHTML = noResults);
    }
    filtrado.map((prod, indx) => {
      items = `
      <div id="prod_#" class="boxProduct">
                      <div class="imgProduct" alt="imagen de producto">
                      <img class="boxForm" src="${prod.img}">
                      <h3 class="precio">
                              <small>$${prod.precioAntes}</small>
                              $${prod.precioDespues}
                              </h3>
                      </div>
                      <div class="pieBox">
                      <div class="titleSubtitle">
                      <h3 class="nombreProd">${prod.producto}</h3>
                      <small class="descProd">${prod.descripcion}</small>
                      </div>
                      <button class="btnCart" onclick="addToCart(this)" data-position="${indx}">
                      <i class="fas fa-shopping-cart"></i>
                      </button>
                      </div>
                      </div>
                      `;
      return (insertProducts.innerHTML += items);
    });
  };

  const filtrarNucba = () => {
    let filtrado;
    let inputFind = "nucba";

    hiddeNucba.classList.add("nucBye");
    setTimeout(() => {
      hiddeNucba.classList.add("none");
    }, 1000);

    filtrado = productos.filter(
      (prod) =>
        prod.producto.includes(inputFind) || prod.categoria.includes(inputFind)
    );
    filterProd.push(filtrado);
    limpiarForm();
    insertProducts.innerHTML = `<h2>${inputFind.toUpperCase()}</h2>`;

    filtrado.map((prod, indx) => {
      let items = `
                  <div id="prod_#" class="boxProduct">
                      <div class="imgProduct" alt="imagen de producto">
                      <img class="boxForm" src="${prod.img}">
                          <h3 class="precio">
                              <small>$${prod.precioAntes}</small>
                              $${prod.precioDespues}
                          </h3>
                          </div>
                      <div class="pieBox">
                      <div class="titleSubtitle">
                      <h3 class="nombreProd">${prod.producto}</h3>
                      <small class="descProd">${prod.descripcion}</small>
                        </div>
                        <button class="btnCart" onclick="addToCart(this)" data-position="${indx}">
                          <i class="fas fa-shopping-cart"></i>
                          </button>
                          </div>
                  </div>
                  `;
      return (insertProducts.innerHTML += items);
    });
  };

  addToCart = (e) => {
    let cartPosition = +e.dataset.position;

    filterProd == ""
      ? arrCart.push(productos[cartPosition])
      : arrCart.push(filterProd[filterProd.length - 1][cartPosition]);
    console.log(arrCart);
    storage.setItem("carrito", JSON.stringify(arrCart));
  };

  const limpiarForm = () => {
    formulario.reset();
    insertProducts.innerHTML = "";
  };

  const desplegaMenu = () => {
    persiana.classList.toggle("active");
  };

  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      dibujaProductos();

      // eventDom
      formulario.addEventListener("submit", fitrar);
      menu.addEventListener("click", desplegaMenu);
      findNucba.addEventListener("click", filtrarNucba);
    });
  };

  init();

  /*******************************************************
   LOCAL STORAGE
   *******************************************************/
  let emailName = document.getElementById("userSesion").parentNode.parentNode;
  let emailNameMovile = document.getElementById("userSesion");
  const storage = window.localStorage;
  let subMenu = document.getElementsByClassName("menuFlotante")[0];
  let cartNum = document.getElementById("cartNum");
  let cartNum2 = document.getElementById("cartNum2");

  const carrito = () => {
    cartNum.innerHTML = `${arrCart.length}</i>`;
    cartNum2.innerHTML = `${arrCart.length}<i class="fas fa-shopping-cart"></i>`;
  };

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

  StorageMail();
  carrito();
})();
