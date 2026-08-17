const remera = 20000;
const calza = 40000;
const campera = 60000;

let total = 0;
let continuar = "si";

while (continuar === "si") {
    let producto = prompt(" ¿Que producto queres comprar? Escribí: remera, calza o campera. ");
    while (producto !== "remera" && producto !== "calza" && producto !== "campera") {
        alert("Producto no válido, debes elegir remera, calza o campera.");
        producto = prompt("Volvé a ingresar el producto.");
    }
    let cantidad = parseInt(prompt("¿Cuantas unidades queres comprar? (solo número enteros)"), 10);
    while (Number.isNaN(cantidad) || cantidad <=0){
        alert("Debes ingresar un número entero mayor a 0.");
        cantidad = parseInt(prompt("Volvé a ingresar la cantidad:") , 10);
    }
    if (producto === "remera") {
        total = total + remera * cantidad;
    } else if (producto === "calza"){
        total = total + calza * cantidad;
    } else if (producto === "campera"){
        total = total + campera * cantidad;
    }
    continuar = prompt("¿Queres agregar otro producto? Escribí si o no.");
}

console.log("El total de tu compra es: $" + total);
alert("El total de tu compra es: $" + total);
