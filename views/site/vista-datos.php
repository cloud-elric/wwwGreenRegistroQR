
<?php
use yii\helpers\Url;
use app\models\Utils;

$this->title="Gracias por participar | Datos de participante";
?>
<div class="container container-ribbon">

<!-- Premio contenedor -->
	<div class="js-premio-contenedor">
		<div class="premio js-premio-ajax">
			<h3><?=$usuario->txt_nombre_completo?></h3>
			<h3><?=$usuario->txt_telefono_celular?></h3>
			<h3><?=$usuario->txt_email?></h3>
			<h3><?=$usuario->num_pelotas?></h3>
			<h3><?=Utils::changeFormatDate($usuario->fch_creacion)?></h3>
		</div>
		
	</div>
	<!-- Fin premio contenedor-->

</div>