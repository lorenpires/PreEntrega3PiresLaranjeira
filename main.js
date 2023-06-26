/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                       ARRAY PRODUCTOS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const productos = []
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                       ARRAY CARRITO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const carrito = []

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        CAROUSEL
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarCarousel() {
    let i = 1
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                if (Number(producto.Año) === 2023) {
                    let imagenCarousel = document.createElement("div")
                    imagenCarousel.className = "carousel-item"
                    imagenCarousel.innerHTML = `
                        <img
                            src="img/carousel_${producto.Titulo}.jpg"
                            class="d-block w-100 imagenCarousel"
                            alt="..."
                            />
                            <div class="carousel-caption d-none d-md-block">
                            <p class="subtitulo-carousel">${producto.Titulo}<p>
                        </div>
                        `
                    if (i === 1) {
                        imagenCarousel.className = "carousel-item active"
                        i++
                    }
                    contenedorCarousel.appendChild(imagenCarousel)
                }
            })
        })
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        AGREGO SLIDER
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarSlider() {
    let i = 4
    let v = 0
    let ulSlider
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                console.log(i)
                if (i === 4) {
                    v++
                    ulSlider = document.querySelector(`.ulSlider${v}`)
                    i = 0
                    console.log("pre carga")
                    console.log(ulSlider)
                }
                i++
                let portada = document.createElement("img")
                portada.setAttribute("src", `img/${producto.Titulo}.jpg`)
                portada.className = "portadacss"
                portada.addEventListener("mouseenter", () => {
                    portada.className =
                        "portadacss animate__animated animate__fadeOut"
                })
                portada.addEventListener("mouseleave", () => {
                    portada.className =
                        "portadacss animate__animated animate__fadeIn"
                })

                let agregarEnSlider = document.createElement("div")
                agregarEnSlider.className =
                    "align-self-end mb-2 d-flex justify-content-center"
                agregarEnSlider.innerHTML = `
                    <button class="btn boton-pelicula">
                        Agregar al carrito
                    </button>
                    `
                agregarEnSlider.addEventListener("click", () =>
                    ExisteCarrito(producto)
                )
                let cardSlider = document.createElement("div")
                cardSlider.className =
                    " mx-3 my-3 py-3 px-4 row justify-content-center card-pelicula"
                cardSlider.innerHTML = `
                    <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
                    <div class="info-pelicula">
                    <p class="">
                        <div class="datos-producto">Año: ${producto.Año}</div>
                        <div class="datos-producto">Director: ${producto.Director}</div>
                        <div class="datos-producto">Género: ${producto.Genero}</div>
                        <div class="datos-producto">Duración: ${producto.Duracion}</div>
                        <div class="precio-producto">Precio: $${producto.Precio}</div>
                    </p>
                    </div>
                `
                let liSlider = document.createElement("li")
                liSlider.className = "liSliders"
                cardSlider.appendChild(portada)
                cardSlider.appendChild(agregarEnSlider)
                liSlider.appendChild(cardSlider)
                ulSlider.appendChild(liSlider)
                console.log("post carga")
                console.log(ulSlider)
                /*if (i === 3) {
                    const itemSlider = document.querySelector(
                        `.slider-item${v}`
                    )
                    itemSlider.appendChild(ulSlider)
                    ulSlider.innerHTML = ""
                    v++
                    i = 0
                }*/
            })
        })
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                AGREGO PRODUCTOS A ESTRENOS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function AgregarProductosIndex() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                if (Number(producto.Año) > 2021) {
                    let portada = document.createElement("img")
                    portada.setAttribute("src", `img/${producto.Titulo}.jpg`)
                    portada.className = "portadacss"
                    portada.addEventListener("mouseenter", () => {
                        portada.className =
                            "portadacss animate__animated animate__fadeOut"
                    })
                    portada.addEventListener("mouseleave", () => {
                        portada.className =
                            "portadacss animate__animated animate__fadeIn"
                    })

                    let agregarProductos = document.createElement("div")
                    agregarProductos.className =
                        "align-self-end mt-2 d-flex justify-content-center"
                    agregarProductos.innerHTML = `
                    <button class="btn boton-pelicula">
                    Agregar al carrito
                    </button>
                    `
                    agregarProductos.addEventListener("click", () =>
                        ExisteCarrito(producto)
                    )
                    let infoProductos = document.createElement("div")
                    infoProductos.className = "info-pelicula"
                    infoProductos.innerHTML = `
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
                        "col-xl-3 col-lg-4 col-md-5 col-10 mx-3 my-3 py-3 px-5 row justify-content-center card-pelicula"
                    listadoProductos.innerHTML = `
                    <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
                    `
                    listadoProductos.appendChild(infoProductos)
                    listadoProductos.appendChild(portada)
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
                let portada = document.createElement("img")
                portada.setAttribute("src", `img/${producto.Titulo}.jpg`)
                portada.className = "portadacss"
                portada.addEventListener("mouseenter", () => {
                    portada.className =
                        "portadacss animate__animated animate__fadeOut"
                })
                portada.addEventListener("mouseleave", () => {
                    portada.className =
                        "portadacss animate__animated animate__fadeIn"
                })

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
                    "col-3 mx-3 my-3 py-3 px-5 row justify-content-center card-pelicula"
                listadoFiltrados.innerHTML = `
                    <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
                    `
                listadoFiltrados.appendChild(cardFiltrados)
                listadoFiltrados.appendChild(portada)
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
        let portada = document.createElement("img")
        portada.setAttribute("src", `img/${producto.Titulo}.jpg`)
        portada.className = "portadacss"
        portada.addEventListener("mouseenter", () => {
            portada.className = "portadacss animate__animated animate__fadeOut"
        })
        portada.addEventListener("mouseleave", () => {
            portada.className = "portadacss animate__animated animate__fadeIn"
        })

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
            "col-3 mx-3 my-3 py-3 px-5 row justify-content-center card-pelicula"
        listadoFiltrados.innerHTML = `
            <div class="titulo-pelicula text-center fs-4">${producto.Titulo}</div>
            `
        listadoFiltrados.appendChild(cardFiltrados)
        listadoFiltrados.appendChild(portada)
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
                            BUSCADOR
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function buscarPelicula(nombrePelicula) {
    const productoBuscado = productos.find(
        (producto) => producto.Titulo === nombrePelicula
    )
    console.log(productoBuscado)

    let portada = document.createElement("img")
    portada.setAttribute("src", `img/${productoBuscado.Titulo}.jpg`)
    portada.className = "portadacss"
    portada.addEventListener("mouseenter", () => {
        portada.className = "portadacss animate__animated animate__fadeOut"
    })
    portada.addEventListener("mouseleave", () => {
        portada.className = "portadacss animate__animated animate__fadeIn"
    })

    let agregarBuscado = document.createElement("div")
    agregarBuscado.className =
        "align-self-end d-flex justify-content-center mt-2"
    agregarBuscado.innerHTML = `
                    <button class="btn boton-pelicula mt-2 ">
                        Agregar al carrito
                    </button>
                    `
    agregarBuscado.addEventListener("click", () =>
        ExisteCarrito(productoBuscado)
    )
    let cardBuscado = document.createElement("div")
    cardBuscado.className = "info-pelicula"
    cardBuscado.innerHTML = `
                    <p class="">
                        <div class="datos-producto">Año: ${productoBuscado.Año}</div>
                        <div class="datos-producto">Director: ${productoBuscado.Director}</div>
                        <div class="datos-producto">Género: ${productoBuscado.Genero}</div>
                        <div class="datos-producto">Duración: ${productoBuscado.Duracion}</div>
                        <div class="precio-producto">Precio: $${productoBuscado.Precio}</div>
                    </p>
                    `
    modalPelicula.className = "col-10 row justify-content-center mt-4 ms-3"
    modalPelicula.innerHTML = `
                    <div class="titulo-pelicula text-center fs-4">${productoBuscado.Titulo}</div>
                    `
    modalPelicula.appendChild(cardBuscado)
    modalPelicula.appendChild(portada)
    modalPelicula.appendChild(agregarBuscado)
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
const buscador = document.querySelector("#buscador")
const botonBuscador = document.querySelector("#boton-buscador")
const modal = document.querySelector("#ventana-modal")
const modalPelicula = document.querySelector(".modal-pelicula")
const cerrarModal = document.getElementsByClassName("cerrar")[0]
const contenedorCarousel = document.querySelector(".carousel-inner")
const innerSlider = document.querySelector(".slider-inner")

AgregarProductosIndex()
AgregarProductosCatalogo()
AgregarCarousel()
AgregarSlider()

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

botonBuscador.addEventListener("click", () => {
    buscarPelicula(buscador.value)
    modal.style.display = "block"
})
cerrarModal.addEventListener("click", function () {
    modal.style.display = "none"
})
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
})
