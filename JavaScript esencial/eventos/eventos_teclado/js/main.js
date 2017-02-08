/*** Eventos ***/

function mostrarTecla (event){
    alert(event.keyCode);
    if (event.ctrlKey){
        alert("Control presionado");
    }
}