<?php
	//Incluir la conexión
	require_once('connection.php');
	
	//Sentencia SQL
	$sql = 'SELECT * FROM user';

	//Obtener datos mediante la sentencia SQL
	foreach ($pdo->query($sql) as $rs) {
		//Mostrar el resultado
		var_dump($rs);
	}
?>