function step1(){$(contenedorPremio).hide(),$(contenedorTarjetas).show(),$(contenedorGlobal).addClass("container-home"),$(contenedorGlobal).removeClass("container-ribbon"),$("img.logo").hide()}function step2(){$(contenedorTarjetas).hide(),$(contenedorRegistro).show(),$(contenedorGlobal).removeClass("container-premio"),$(contenedorGlobal).removeClass("container-home"),$(contenedorGlobal).addClass("container-ribbon"),$("img.logo").attr("src","webAssets/images/logo-fa.png"),$("img.logo").show()}function step3(){$(contenedorRegistro).hide(),$(contenedorPremio).show(),$("img.logo").attr("src","webAssets/images/logo-giro.png"),$(contenedorGlobal).removeClass("container-ribbon"),$(contenedorGlobal).addClass("container-premio")}function validarSoloNumeros(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110])||65===e.keyCode&&(!0===e.ctrlKey||!0===e.metaKey)||e.keyCode>=35&&e.keyCode<=40||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()}var contenedorRegistro=".js-registro-contenedor",contenedorPremio=".js-premio-contenedor",contenedorGracias=".js-gracias-contenedor",contenedorTarjetas=".js-tarjetas-contenedor",contenedorGlobal=".container";$(document).ready(function(){function e(e){e?($(".overlay").removeClass("visible"),$(".overlay").css("position","absolute"),s=!1):($(".overlay").addClass("visible"),$(".overlay").css("position","fixed"),s=!0)}function o(){$(".flip-panel").addClass("shake"),setTimeout(n,500)}function n(){$(".flip-panel").removeClass("shake")}console.log("Jquery Running"),$(".terminos-wrapper .message").on("click",function(){e(s)}),$(".js-btn-aceptar-aviso").on("click",function(o){o.preventDefault(),$(".js-check-box-aviso").css("background","#D98C34"),$(".js-check-box-aviso").addClass("js-check-box-aviso-checked"),e(s)}),$(".js-check-box-aviso").on("click",function(o){o.preventDefault(),$(this).hasClass("js-check-box-aviso-checked")?($(".js-check-box-aviso").css("background","white"),$(".js-check-box-aviso").removeClass("js-check-box-aviso-checked")):e(s)}),$(".js-btn-cerrar-aviso").on("click",function(e){e.preventDefault(),cerrarAviso()}),$(".js-next-step").on("click",function(e){Ladda.create(this).start()}),$("#entusuarios-txt_telefono_celular").keydown(function(e){validarSoloNumeros(e)}),$("#entusuarios-txt_cp").keydown(function(e){validarSoloNumeros(e)}),$("#entusuarios-num_edad").keydown(function(e){validarSoloNumeros(e)}),$("#entusuarios-num_patos").keydown(function(e){validarSoloNumeros(e)}),$(".js-boton-inicio").on("click",function(e){e.preventDefault(),step1()}),$("body").on("beforeSubmit","#form-usuario-participar",function(){return!$(this).find(".has-error").length&&($(".js-check-box-aviso").hasClass("js-check-box-aviso-checked")?void Ladda.create(document.getElementById("js-btn-guardar-informacion")).start():(sweetAlert("Espera","Debes aceptar el aviso de privacidad","warning"),!1))});var s=!1;$(".js-dismiss-modal").click(function(o){console.log(this),o.preventDefault(),e(s)}),$(".overlay").click(function(o){console.log(this),o.preventDefault(),o.target===this&&e(s)});var a=!1;$(".js-flip-panel").click(function(e){e.preventDefault(),console.log("Fliping panel"),a?($(".flip-panel").removeClass("flip"),a=!1):($(".flip-panel").addClass("flip"),a=!0)}),$(".js-shake-panel").click(function(e){e.preventDefault(),o()})});