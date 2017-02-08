/** Condiciones complejas **/
/** Operadores lógicos**
    
    AND &&
    OR ||
    NOT !
    XOR xor
*/

var cantidadProductos = prompt("Ingrese la cantidad de productos");
var precioTotal = prompt("Precio total");
var pagaEnEfectivo = confirm("¿Ha pagado en efectivo?");
var descuento = 0;

if(cantidadProductos > 10 && precioTotal < 500) {
    descuento = 10;
    console.log("Descuento: " + descuento + "%");
}
if (cantidadProductos >10 && precioTotal >= 500){
    descuento = 15;
    console.log("Descuento: " + descuento + "%");
}

if(precioTotal < 10 && !pagaEnEfectivo){
    descuento = 2;
    console.log("Descuento: " + descuento + "%");
}

// 500 Preoductos ó 1000 en precio -> MAYORISTA
if ((cantidadProductos >= 500 || precioTotal >= 1000) && (pagaEnEfectivo)){
    descuento *= 1.20;
    console.log("Descuento: " + descuento + "%");
}



