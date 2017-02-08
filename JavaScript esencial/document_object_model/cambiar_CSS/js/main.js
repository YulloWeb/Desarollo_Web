/** SCRIPT **/

function inicializar(){
    var link = document.getElementById("linkV2B");
    var content = document.getElementById("content");
    link.href = "http://www.video2brain.com";
    
    //Cambiar CSS
    content.style.backgroundColor = "yellow";
    content.style.height = "100px";
}

function cambiarPagina(){
    document.getElementById("linkV2B").href = "http://www.google.com";
}