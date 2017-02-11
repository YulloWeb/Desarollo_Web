/**** SCRIPT ******/

//Leer documento HTML
var documento = $(document);

//Ejecutar función inicializar cuando el documento esta listo
documento.ready(resaltar);

function resaltar(){
    //Seleccionar el elemento por clase
    var boton = $("#boton");

    //Acción a realizar 
    boton.click(onClick);
}

function onClick(){
    var clase = $(".primario");

    //Estilo CSS
    clase.css("color","blue");
    clase.css("font-size","3rem");
    clase.css("background-color","yellow");
}