/** Funciones **/

//Variable global
var tipoLetra = "Arial";

//Definición de la función
function mostrarMensaje(mensaje,color){
    //Variable local
    var tamanioLetra = 14;
    
    if (color == "rojo"){
        document.write("<p style='color:red'>" + mensaje + "</p>");
    }
    else{
        document.write("<p style='color:blue'>" + mensaje + "</p>");
    }
    
}

//Invocar una función
mostrarMensaje("Este es un mensaje","rojo");
mostrarMensaje("Este es un mensaje","azul");

function calcularDescuento(precio, descuento){
    var final = precio - (precio * descuento/100);
    
    //Retorna el valor
    return final;
}

document.write(calcularDescuento(600, 15));