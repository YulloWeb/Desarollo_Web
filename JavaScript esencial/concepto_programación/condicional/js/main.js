/** Condicional **/

var cantidadStock = prompt("Ingrese la cantidad de productos");

if (cantidadStock <= 5){
   alert("Debes conseguir más stock de productos"); 
    cantidadStock = parseInt(cantidadStock) + 10;
}
else {
    alert("Estás bien el stock");
}

document.write("El stock actual es " + cantidadStock);
