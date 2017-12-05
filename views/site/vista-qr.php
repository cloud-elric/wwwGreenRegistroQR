
<?php

?>

<div class="container container-premio">

<h3>Gracias por participar</h3>
<p>De resultar ganador te contactaremos para validar tu código y tu ticket de compra</p>
<img src="<?= Yii::$app->urlManager->createAbsoluteUrl(['site/ver-codigo?token=' . $usuario->txt_token]) ?>" />

</div>

