/** Arrays **/

var nombres = ["Julio","Isidro","Juan"];
var paises = new Array();
paises.push("Argentina");
paises.push("Bolivia");
paises.push("Colombia");
paises.push("España");
paises.push("Mèxico");

//Recorrer array

for (var i = 0; i < paises.length; i++){
    document.write("<div>" + paises[i] + "</div>");
}