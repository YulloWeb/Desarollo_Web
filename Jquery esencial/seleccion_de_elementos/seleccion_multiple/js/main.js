/**** SCRIPT ******/

//Leer documento HTML
var documento = $(document);

//Ejecutar función inicializar cuando el documento esta listo
documento.ready(inicializar);

function inicializar(){
    //Seleccionar el elemento por ID
    var id = $("#revelar");

    //Acción a realizar 
    id.click(mostrar);
}

function mostrar(){
    //Seleccionar al atributo
    var atributo = $("p#cambiar");
 

    //Estilo CSS
    atributo.css("color","green");
    atributo.css("font-size","3rem");
    atributo.css("background-color","yellow");
}