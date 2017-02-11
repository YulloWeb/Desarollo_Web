<?php
//Declarion de variables fuertemente tipado
declare(strict_types=1);
function add(int $number01, int $number02){
    return $number01 + $number02;
}

echo add(3,3);
//echo add (3,'3')//Error porque no es un entero el segundo parametro

?>