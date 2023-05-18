/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                       ARRAY PRODUCTOS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const productos = [
    {
        id: 1,
        nombre: "Vino 1",
        precio: 9000,
        stock: "Si",
        bodega: "Two",
        tinto: "si",
    },
    {
        id: 2,
        nombre: "Vino 2",
        precio: 25000,
        stock: "Si",
        bodega: "One",
        tinto: "no",
    },
    {
        id: 3,
        nombre: "Vino 3",
        precio: 14000,
        stock: "Si",
        bodega: "Six",
        tinto: "si",
    },
    {
        id: 4,
        nombre: "Vino 4",
        precio: 8000,
        stock: "Si",
        bodega: "One",
        tinto: "si",
    },
]

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                       ARRAY CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const carrito = []

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                AGREGO PRODUCTOS A HTML
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarProductos() {
    productos.forEach((producto) => {
        let agregarProductos = document.createElement("button")
        agregarProductos.className = "btn btn-outline-success fw-bold card-text"
        agregarProductos.innerHTML = `Agregar al carrito`
        agregarProductos.addEventListener("click", () =>
            AgregarCarrito(producto)
        )
        let cardProductos = document.createElement("div")
        cardProductos.className = "card-body"
        cardProductos.innerHTML = `
                <p class="card-text">
                    Precio: $${producto.precio}<div></div>
                    Stock: ${producto.stock}
                </p>
        `

        let listadoProductos = document.createElement("div")
        listadoProductos.className = "card border-dark mb-3"
        listadoProductos.style = "max-width: 20rem"
        listadoProductos.innerHTML = `
            <div class="card-header">${producto.nombre}</div>
        `
        cardProductos.appendChild(agregarProductos)
        listadoProductos.appendChild(cardProductos)
        divProductos.appendChild(listadoProductos)
    })
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 AGREGO PRODUCTOS A CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarCarrito(producto) {
    carrito.push(producto)
    divCarrito()
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 BORRO PRODUCTOS A CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function BorrarDeCarrito(producto) {
    let index = carrito.indexOf(producto)
    carrito.splice(index, 1)
    divCarrito()
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ACTUALIZAR PRODUCTOS DEL CARRITO Y PASAJE A HTML
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function divCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    CarritoProductos.innerHTML = ""
    carrito.forEach((producto) => {
        let eliminarCarrito = document.createElement("button")
        eliminarCarrito.className = "btn btn-outline-danger fw-bold card-text"
        eliminarCarrito.innerHTML = `Borrar del Carrito`
        eliminarCarrito.addEventListener("click", () =>
            BorrarDeCarrito(producto)
        )
        let cardCarrito = document.createElement("div")
        cardCarrito.className = "card-body"
        cardCarrito.innerHTML = `
                <p class="card-text">
                    Precio: $${producto.precio}<div></div>
                    Stock: ${producto.stock}
                </p>
        `

        let listadoCarrito = document.createElement("div")
        listadoCarrito.className = "card border-dark mb-3"
        listadoCarrito.style = "max-width: 20rem"
        listadoCarrito.innerHTML = `
            <div class="card-header">${producto.nombre}</div>
        `
        cardCarrito.appendChild(eliminarCarrito)
        listadoCarrito.appendChild(cardCarrito)
        CarritoProductos.appendChild(listadoCarrito)
    })
    let TotalCompra = carrito.reduce((accum, producto) => {
        return accum + producto.precio
    }, 0)
    let PrecioFinal = document.createElement("h3")
    PrecioFinal.innerHTML = `Total: $${TotalCompra}`
    CarritoProductos.appendChild(PrecioFinal)
    console.log(inputName.value.length)
    console.log(inputEmail.length)
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        ENVIAR STORAGE
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function RecibirStorage() {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito")) || []
    carrito.push(...carritoStorage)
    divCarrito()
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        FILTRO BODEGA
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function FiltradoBodega(bodegaElegida) {
    const productosFiltrados = productos.filter(
        (producto) => producto.bodega === bodegaElegida
    )
    listadoVinos.innerHTML = ""
    productosFiltrados.forEach((producto) => {
        let listado = document.createElement("div")
        listado.className = "card border-dark mb-3"
        listado.style = "max-width: 20rem"
        listado.innerHTML = `
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body">
                <p class="card-text">
                    Precio: $${producto.precio}<div></div>
                    Stock: ${producto.stock}
                </p>
                <button type="button" class="botonAgregar btn btn-outline-success fw-bold">
                    Agregar al carrito
                </button>
            </div>
        `
        listadoVinos.appendChild(listado)
    })
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        FILTRO TINTO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function FiltradoTinto(valor) {
    const productosFiltrados = productos.filter(
        (producto) => producto.tinto === valor
    )
    listadoVinos.innerHTML = ""
    productosFiltrados.forEach((producto) => {
        let listado = document.createElement("div")
        listado.className = "card border-dark mb-3"
        listado.style = "max-width: 20rem"
        listado.innerHTML = `
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body">
                <p class="card-text">
                    Precio: $${producto.precio}<div></div>
                    Stock: ${producto.stock}
                </p>
                <button type="button" class="botonAgregar btn btn-outline-success fw-bold">
                    Agregar al carrito
                </button>
            </div>
        `
        listadoVinos.appendChild(listado)
    })
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                            FILTRO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function Filtrado(valor, filtroUsado) {
    const productosFiltrados =
        filtroUsado === "bodega"
            ? productos.filter((producto) => producto.bodega === valor)
            : filtroUsado === "tinto"
            ? productos.filter((producto) => producto.tinto === valor)
            : console.log("nada")

    listadoVinos.innerHTML = ""
    productosFiltrados.forEach((producto) => {
        let agregarFiltrados = document.createElement("button")
        agregarFiltrados.className = "btn btn-outline-success fw-bold card-text"
        agregarFiltrados.innerHTML = `Agregar al carrito`
        agregarFiltrados.addEventListener("click", () =>
            AgregarCarrito(producto)
        )
        let cardFiltrados = document.createElement("div")
        cardFiltrados.className = "card-body"
        cardFiltrados.innerHTML = `
                <p class="card-text">
                    Precio: $${producto.precio}<div></div>
                    Stock: ${producto.stock}
                </p>
        `

        let listadoFiltrados = document.createElement("div")
        listadoFiltrados.className = "card border-dark mb-3"
        listadoFiltrados.style = "max-width: 20rem"
        listadoFiltrados.innerHTML = `
            <div class="card-header">${producto.nombre}</div>
        `
        cardFiltrados.appendChild(agregarFiltrados)
        listadoFiltrados.appendChild(cardFiltrados)
        listadoVinos.appendChild(listadoFiltrados)
    })
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    CONFIRMACION COMPRA
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function ConsultarCompra(e) {
    e.preventDefault()
    inputName.value.length === 0
        ? Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Se necesita ingresar un nombre",
          })
        : inputEmail.value.length === 0
        ? Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Se necesita ingresar un email",
          })
        : EjectuarCompra()
}
function EjectuarCompra() {
    Swal.fire({
        title: "Confirmar compra?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Compra confirmada!", "", "success")
        }
    })
}
function FaltanProductos(e) {
    e.preventDefault()
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Se necesitan productos en el carrito",
    })
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        INICIA LECTURA
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const divProductos = document.querySelector(".container-cards")
const listadoVinos = document.querySelector(".containerVinos")
const CarritoProductos = document.querySelector(".divCarrito")
const inputBodega = document.querySelector(".inputBodega")
const inputTinto = document.querySelectorAll(".inputTinto")
const formulario = document.querySelector(".formulario")
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")

AgregarProductos()

carrito.length === 0 && RecibirStorage()

formulario.addEventListener("submit", (e) => {
    carrito.length === 0 ? FaltanProductos(e) : ConsultarCompra(e)
})

document.querySelectorAll(".inputTinto").forEach((boton, index) => {
    boton.addEventListener("input", () => {
        index === 0 ? Filtrado("si", "tinto") : Filtrado("no", "tinto")
    })
})

inputBodega.addEventListener("input", () =>
    Filtrado(inputBodega.value, "bodega")
)
