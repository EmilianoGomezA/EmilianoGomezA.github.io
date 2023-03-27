<?php

//llamado de los campos

$valoracion = $_POST['valoracion'];
$observaciones = $_POST['observaciones'];

//Datos

$carta = "Un usuario ha enviado una valoración \n";
$carta .= "Su calificación ha sido: $valoracion \n";
$carta .= "Sus observaciones son: $observaciones \n";

$destinatario = 'emiliano.gomez1412@gmail.com';

//Enviando mail
mail($destinatario, utf8_decode($carta), $header);

//Redireccionando a la pag principal
header('Location:redireccion_form.html');
?>