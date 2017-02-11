/**** SCRIPT ******/

//Leer documento HTML
var documento = $(document);

//Ejecutar función inicializar cuando el documento esta listo
documento.ready(inicializar);

function inicializar(){
    //Seleccionar el elemento por ID
    var id = $("#identificador");

    //Acción a realizar 
    id.click(onClick);
}

function onClick(){
    var id = $("#identificador");

    //Estilo CSS
    id.css("color","green");
    id.css("font-size","3rem");
    id.css("background-color","yellow");
}