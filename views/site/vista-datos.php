<?php

use app\modules\ModUsuarios\models\Utils;
echo $usuario->txt_nombre_completo;
echo "<br>";
echo $usuario->txt_telefono_celular;
echo "<br>";
echo $usuario->txt_email;
echo "<br>";
echo $usuario->num_pelotas;
echo "<br>";
echo Utils::changeFormatDate($usuario->fch_creacion);
?>

