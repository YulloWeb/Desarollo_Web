/** SCRIPT **/

function apagar(){
    var contenedor = document.getElementById("contenedor");
    //contenedor.style.visibility = 'hidden';
    contenedor.style.display = 'none';
}

function encender(){
    var contenedor = document.getElementById("contenedor");
    //contenedor.style.visibility = 'visible';
    contenedor.style.display = 'block';
}

function apagarEncender() {
    var contenedor = document.getElementById("contenedor");
    var boton = document.getElementById("boton");
    if(contenedor.style.display == 'block' || contenedor.style.display == ''){
        apagar();
        boton.value = 'Encender';
    }
    else{
        encender();
        boton.value = 'Apagar';
    }
}