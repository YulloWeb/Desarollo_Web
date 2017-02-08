/** SCRIPT **/

function aplicarEstilosTabla(){
    //Array de td de la tabla
    //var celdas = document.getElementsByTagName("tr");
    var tabla2 = document.getElementById("tabla2");
    var celdas = tabla2.getElementsByTagName("tr");
    for (var i = 0; i < celdas.length; i++){
        if (i%2 == 0){
           celdas[i].className = "par"; 
        }
        else{
            celdas[i].className = "impar";
        }
        
    }
}
