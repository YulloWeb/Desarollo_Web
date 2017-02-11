/**** SCRIPT ******/

//Leer documento HTML
var documento = $(document);

//Ejecutar función inicializar cuando el documento esta listo
documento.ready(inicializar);

function inicializar(){
    //Seleccionar el elemento por etiqueta
    var etiqueta = $("h2");

    //Acción a realizar 
    etiqueta.click(onClick);
}

function onClick(){
    //var etiqueta = $("h2");

    //Selecionar a un elemento especifico con this
    var etiqueta = $(this);

    //Estilo CSS
    etiqueta.css("color","blue");
    etiqueta.css("font-size","3rem");
    etiqueta.css("background-color","yellow");
}