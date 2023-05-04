function IngresarProducto(array) {
    let confirmacion
    console.log("Registrando nuevo producto")
    do {
        array.push({
            nserie: prompt("N° de Serie"),
            nombre: prompt("Nombre del producto"),
            precio: Number(prompt("Precio del producto: $")),
        })
        console.log("Producto registrado")
        confirmacion = prompt("Si desea registrar otro producto ingrese 's'")
    } while (confirmacion === "s")
}

function AgregarProducto(array1, array2) {
    console.log("Productos en venta:")
    for (const producto of array1) {
        console.log(
            "N° de Serie: " +
                producto.nserie +
                ", nombre: " +
                producto.nombre.toUpperCase() +
                " precio: $" +
                producto.precio
        )
    }
    let nuevaCompra
    do {
        let ncompra = prompt("Ingrese el N° de serie del producto a comprar: ")
        const nuevoProducto = array1.find(
            (producto) => producto.nserie == ncompra
        )
        array2.push(nuevoProducto)
        nuevaCompra = prompt("Para agregar otro producto ingresar 'a'")
    } while (nuevaCompra == "a")
}

function MostrarCarrito(array2) {
    console.log("Productos en el carrito:")
    for (const producto of array2) {
        console.log(producto.nombre.toUpperCase() + " $" + producto.precio)
    }
    let precioTotal = array2.reduce(
        (acumulador, producto) => acumulador + producto.precio,
        0
    )
    console.log(`El precio total es: $${precioTotal}`)
}

const productos = [
    { nserie: 117, nombre: "Auriculares", precio: 9000 },
    { nserie: 559, nombre: "estufa eléctrica", precio: 12000 },
    { nserie: 444, nombre: "microondas", precio: 25000 },
]
const carrito = []
let eleccion
do {
    eleccion = prompt(
        "Para registrar un producto ingrese 's', para agregar al carrito ingrese 'a', para visualizar el carrito ingrese 'c', si desea terminar el proceso ingrese '0' "
    )
    switch (eleccion) {
        case "s":
            IngresarProducto(productos)
            break
        case "a":
            AgregarProducto(productos, carrito)
            break
        case "c":
            MostrarCarrito(carrito)
            break
    }
} while (eleccion != 0)
