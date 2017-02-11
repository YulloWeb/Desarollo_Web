<?php
    //Retorno de valores especificando el tipo de dato 

    declare(strict_types=1);
    function add(int $num01, int $num02): int{
        return $num01 + $num02;
        //return "Hola"; //Error, No regresa integer

    }

    echo add(2,5);

    function greet(string $name): string{
        return $name;
        //return 123; //Error, No regresa string
    }

    echo '<br />';

    echo greet("Julio Isidro");
?>