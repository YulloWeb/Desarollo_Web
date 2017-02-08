/** SCRIPT **/

function llenarContenedor(){
    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "Esto es un texto desde Javascript";
}

function alertar(mensaje){
    var estado = document.getElementById("estado");
    estado.style.display = "block";
    estado.innerHTML = mensaje + "<br />" + estado.innerHTML;
}