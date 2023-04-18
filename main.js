function IngresarProductos() {
    let i
    let precio
    let suma = 0
    for (i = 1; precio != 0; i++) {
        precio = Number(prompt(`Ingresar precio del producto n°${i}`))
        suma += precio
    }
    alert("El precio total es de $" + suma)
    return suma
}

function CalcularCuotas(contado) {
    let precio_cuotas
    let cant_cuotas = Number(prompt("En cuantas cuotas quiere abonar: "))
    if (cant_cuotas == 1) {
        precio_cuotas = (contado / cant_cuotas) * 0.8
    } else {
        precio_cuotas = contado / cant_cuotas
    }
    alert(`Se deben pagar ${cant_cuotas} cuotas de $${precio_cuotas} `)
}
let total
alert(
    "Intoduzca los precios de los productos a llevar, en caso de introducir todos ponga 0"
)
total = IngresarProductos()
alert("En caso de abonar en 1 cuota se le aplicara un 20% de descuento")
CalcularCuotas(total)
