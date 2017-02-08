/** Variable lógica **/

/** Operadores lógicos **

< Menor
> Mayor
<= Menor igual
>= Mayor igual
== Igual
!= Distinto

*/

var edad = prompt("Escribe tu edad");
var esMayorEdad = 18;

if ( esMayorEdad <= edad){
    if (edad == 18){
        document.write("Gracias por ingresar, casi que no entras");
    }
    else{
         document.write("Gracias por ingrasar al sitio para mayores de edad");
    }
   
}
else{
    document.write("Usted no puede ingresar");
}



