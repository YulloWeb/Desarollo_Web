<?php
	//Especificar el Sistema Gestor de Base de Datos
	$dns = 'mysql:dbname=php_sql;host=127.0.0.1';
	$user = 'root';
	$password = 'JIsidro0203';

	try{
		//Instancia de conexión
		$pdo = new PDO( $dns, $user, $password );
		//echo 'Conexión correcta';
	}catch(PDOException $e){
		//Error en la conexión
		echo 'Error al conectar a la base de datos: ' . $e->getMessage();
	}


?>