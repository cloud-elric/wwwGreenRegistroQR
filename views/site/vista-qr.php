
<?php

?>
<h3>Gracias por participar</h3>
<img src="<?= Yii::$app->urlManager->createAbsoluteUrl(['site/ver-codigo?token=' . $usuario->txt_token]) ?>" />
