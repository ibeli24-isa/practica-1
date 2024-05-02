$(document).ready(function()
{
  /* alert("hola");*/

		$(".playlist").audioControls(
		{
			autoPlay:false,
			timer:'increment',
			onAudioChange:function(datos)
			{
				$(".nombremp3").text(datos.title);
			}

		});
});