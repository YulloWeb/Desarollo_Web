/** Operaciones matematicas **/

var precioMonitor = 150;
var precioTeclado = 40;

//suma
var precioTotal = precioMonitor + precioTeclado;
var precioConrecargo = precioMonitor +1;

console.log("Suma: "  + precioTeclado);
//Restar
var diferencia = precioMonitor -precioTeclado;
console.log("Resta: " + diferencia);

//Multiplicar
var precio2Monitores = precioMonitor * 2;
console.log("Multiplicación: " + precio2Monitores);

//Dividir 
var precio1Monitor = precio2Monitores / 2;
console.log("Division: " + precio1Monitor);

//Autosumar
precioTotal += 1; //precioTotal = precioTotal + 1;
console.log("Autosumar: " + precioTotal);

//Aumento del 15%
precioMonitor *= 1.15;
precioTeclado *= 1.15;
console.log("Aumento del 15%: " + precioMonitor);

//Incrementador
var cantidadStock = 60;
cantidadStock++;
//cantidadStock--;
console.log("Incrementador: " + cantidadStock);

//Resto de la division 
var resto = 100 % 3;
console.log("Rsto de la dicison: " + resto);

var total = ((precio2Monitores + precioTeclado) * 2);
console.log("Total de pedidio: " + total);