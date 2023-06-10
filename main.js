/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                       ARRAY PRODUCTOS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const productos = []
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                       ARRAY CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const carrito = []

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                AGREGO PRODUCTOS A ESTRENOS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarProductosIndex() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                if (Number(producto.Año) > 2021) {
                    let agregarProductos = document.createElement("div")
                    agregarProductos.className = "align-self-end"
                    agregarProductos.innerHTML = `
                        <button class="btn boton-pelicula  ">
                            Agregar al carrito
                        </button>
                    `
                    agregarProductos.addEventListener("click", () =>
                        ExisteCarrito(producto)
                    )
                    let cardProductos = document.createElement("div")
                    cardProductos.className = "info-pelicula"
                    cardProductos.innerHTML = `
                    <p class="">
                        <div class="datos-producto">Año: ${producto.Año}</div>
                        <div class="datos-producto">Director: ${producto.Director}</div>
                        <div class="datos-producto">Género: ${producto.Genero}</div>
                        <div class="datos-producto">Duración: ${producto.Duracion}</div>
                        <div class="precio-producto">Precio: $${producto.Precio}</div>
                    </p>
                    `

                    let listadoProductos = document.createElement("div")
                    listadoProductos.className =
                        "col-3 mx-3 my-3 py-3 px-4 row card-pelicula"
                    listadoProductos.innerHTML = `
                    <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
                    `
                    listadoProductos.appendChild(cardProductos)
                    listadoProductos.appendChild(agregarProductos)
                    divProductos.appendChild(listadoProductos)
                }
            })
            productos.push(...data)
        })
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                AGREGO PRODUCTOS A CATALOGO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarProductosCatalogo() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                let agregarFiltrados = document.createElement("div")
                agregarFiltrados.className = "align-self-end"
                agregarFiltrados.innerHTML = `
                    <button class="btn boton-pelicula  ">
                        Agregar al carrito
                    </button>
                    `
                agregarFiltrados.addEventListener("click", () =>
                    ExisteCarrito(producto)
                )
                let cardFiltrados = document.createElement("div")
                cardFiltrados.className = "info-pelicula"
                cardFiltrados.innerHTML = `
                    <p class="">
                        <div class="datos-producto">Año: ${producto.Año}</div>
                        <div class="datos-producto">Director: ${producto.Director}</div>
                        <div class="datos-producto">Género: ${producto.Genero}</div>
                        <div class="datos-producto">Duración: ${producto.Duracion}</div>
                        <div class="precio-producto">Precio: $${producto.Precio}</div>
                    </p>
                    `

                let listadoFiltrados = document.createElement("div")
                listadoFiltrados.className =
                    "col-3 mx-3 my-3 py-3 px-4 row card-pelicula"
                listadoFiltrados.innerHTML = `
                    <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
                    `
                listadoFiltrados.appendChild(cardFiltrados)
                listadoFiltrados.appendChild(agregarFiltrados)
                divFiltrados.appendChild(listadoFiltrados)
            })
            productos.push(...data)
        })
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 CHEQUEO PRODUCTOS DE CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function ExisteCarrito(producto) {
    let existe = carrito.includes(producto)
    existe === true
        ? Toastify({
              text: "Ya esta en el carrito",
              style: {
                  background:
                      "radial-gradient(circle, rgba(255,183,3,1) 80%, rgba(251,213,116,1) 91%, rgba(247,247,247,1) 99%)",
              },
              duration: 3000,
          }).showToast()
        : AgregarCarrito(producto)
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 AGREGO PRODUCTOS A CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarCarrito(producto) {
    carrito.push(producto)
    divCarrito()
    Toastify({
        text: "Agregado al carrito",
        style: {
            background:
                "radial-gradient(circle, rgba(2,48,71,1) 66%, rgba(70,103,120,1) 92%, rgba(247,247,247,1) 99%)",
        },
        duration: 3000,
    }).showToast()
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 BORRO PRODUCTOS A CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function BorrarDeCarrito(producto) {
    let index = carrito.indexOf(producto)
    carrito.splice(index, 1)
    divCarrito()
    Toastify({
        text: "Borrado del carrito",
        style: {
            background:
                "radial-gradient(circle, rgba(114,108,41,1) 78%, rgba(162,158,114,1) 91%, rgba(255,255,255,1) 99%)",
        },
        duration: 3000,
    }).showToast()
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ACTUALIZAR PRODUCTOS DEL CARRITO Y PASAJE A HTML
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function divCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    CarritoProductos.innerHTML = ""
    console.log(carrito)
    carrito.forEach((producto) => {
        let eliminarCarrito = document.createElement("div")
        eliminarCarrito.className =
            "align-self-end col-7 mt-2 row justify-content-end"
        eliminarCarrito.innerHTML = `
                        <button class="btn boton-carrito rounded-3">
                            Eliminar del carrito
                        </button>
                    `
        eliminarCarrito.addEventListener("click", () =>
            BorrarDeCarrito(producto)
        )
        /*let cardCarrito = document.createElement("div")
        cardCarrito.className = "info-carrito"
        cardCarrito.innerHTML = `
                    <p class="">
                        <div class="datos-producto">Año: ${producto.Año}</div>
                        <div class="datos-producto">Director: ${producto.Director}</div>
                        <div class="datos-producto">Género: ${producto.Genero}</div>
                        <div class="datos-producto">Duración: ${producto.Duracion}</div>
                        <div class="precio-producto">Precio: $${producto.Precio}</div>
                    </p>
                    `
        */
        let listadoCarrito = document.createElement("div")
        listadoCarrito.className =
            "col-4 mx-3 my-3 py-3 px-4 row justify-content-end card-carrito"
        listadoCarrito.innerHTML = `
                    <div class="titulo-carrito text-center fs-4">${producto.Titulo}</div>
                    `
        //listadoCarrito.appendChild(cardCarrito)
        listadoCarrito.appendChild(eliminarCarrito)
        CarritoProductos.appendChild(listadoCarrito)
    })
    let TotalCompra = carrito.reduce((accum, producto) => {
        return accum + Number(producto.Precio)
    }, 0)
    let PrecioFinal = document.createElement("h3")
    PrecioFinal.innerHTML = `Total: $${TotalCompra}`
    CarritoProductos.appendChild(PrecioFinal)
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
                            FILTRO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function Filtrado(valor, filtroUsado) {
    ReseteoFiltro(filtroUsado)
    console.log(filtroUsado)
    console.log(valor)
    console.log(productos)
    const productosFiltrados =
        filtroUsado === "precio"
            ? productos.filter((producto) => producto.Precio === valor)
            : filtroUsado === "genero"
            ? productos.filter((producto) => producto.Genero === valor)
            : filtroUsado === "4K"
            ? productos.filter((producto) => producto.cuatroK === valor)
            : console.log("nada")
    divFiltrados.innerHTML = ""
    productosFiltrados.forEach((producto) => {
        let agregarFiltrados = document.createElement("div")
        agregarFiltrados.className = "align-self-end"
        agregarFiltrados.innerHTML = `
            <button class="btn boton-pelicula  ">
                Agregar al carrito
            </button>
            `
        agregarFiltrados.addEventListener("click", () =>
            ExisteCarrito(producto)
        )
        let cardFiltrados = document.createElement("div")
        cardFiltrados.className = "info-pelicula"
        cardFiltrados.innerHTML = `
            <p class="">
                <div class="datos-producto">Año: ${producto.Año}</div>
                <div class="datos-producto">Director: ${producto.Director}</div>
                <div class="datos-producto">Género: ${producto.Genero}</div>
                <div class="datos-producto">Duración: ${producto.Duracion}</div>
                <div class="precio-producto">Precio: $${producto.Precio}</div>
            </p>
            `
        let listadoFiltrados = document.createElement("div")
        listadoFiltrados.className =
            "col-3 mx-3 my-3 py-3 px-4 row card-pelicula"
        listadoFiltrados.innerHTML = `
            <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
            `
        listadoFiltrados.appendChild(cardFiltrados)
        listadoFiltrados.appendChild(agregarFiltrados)
        divFiltrados.appendChild(listadoFiltrados)
    })
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                      RESETEO FILTRO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function ReseteoFiltro(filtroUsado) {
    if (filtroUsado === "precio") {
        input4K[1].checked = false
        input4K[0].checked = false
        inputGenero.value = ""
    }
    if (filtroUsado === "genero") {
        input4K[1].checked = false
        input4K[0].checked = false
        inputPrecio.value = ""
    }
    if (filtroUsado === "4K") {
        inputPrecio.value = ""
        inputGenero.value = ""
    }
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
              text: "Se necesitan ingresar un nombre",
          })
        : inputEmail.value.length === 0
        ? Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Se necesitan ingresar un email",
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
const divProductos = document.querySelector(".container-index")
const divFiltrados = document.querySelector(".container-catalogo")
const CarritoProductos = document.querySelector(".divCarrito")
const inputPrecio = document.querySelector(".inputPrecio")
const inputGenero = document.querySelector(".inputGenero")
const input4K = document.querySelectorAll(".input4K")
const formulario = document.querySelector(".formulario")
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")

AgregarProductosIndex()
AgregarProductosCatalogo()

carrito.length === 0 && RecibirStorage()

formulario.addEventListener("submit", (e) => {
    carrito.length === 0 ? FaltanProductos(e) : ConsultarCompra(e)
})

document.querySelectorAll(".input4K").forEach((boton, index) => {
    boton.addEventListener("input", () => {
        index === 0 ? Filtrado("si", "4K") : Filtrado("no", "4K")
    })
})

inputPrecio.addEventListener("input", () =>
    Filtrado(inputPrecio.value, "precio")
)

inputGenero.addEventListener("input", () =>
    Filtrado(inputGenero.value, "genero")
)
