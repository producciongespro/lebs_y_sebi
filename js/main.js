"use strict"
var audioOn=true,
audioInicio;
$(document).ready(function(){
	// métodos personalizados:
	 audioInicio = document.getElementById("audioInicio");
	playIntroAudio ();
	addEventPlayMedia();

	$("#btnSonido").click(
		function () {
			muteSound(this);
		}
	)


  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

function addEventPlayMedia () {
	$(".img-circle").click(function (){


		//Detiene el audio intro
			audioInicio.pause();
			audioInicio.currentTime=0;


		//Crea el objeto audio lo renderiza y abre el modal

			var pathMedio =  $(this).attr("path"),
			typeMedio = pathMedio.slice(-3);


			if (typeMedio=="mp3") {
				var tmp = $("<audio id='currentMedio' preload='true' autoplay='true' controls></audio>");
				$(tmp).attr("src", pathMedio);
				$("#contenedorPlayer").html(tmp);
			};

			if (typeMedio=="mp4") {
				var tmp = $("<video id='currentMedio' preload='true' autoplay='true' controls></video>");
				$(tmp).attr("src", pathMedio);
				$("#contenedorPlayer").html(tmp);
			};

			if (typeMedio=="pdf") {
				var tmp = $("<embed id='currentMedio' src='"+ pathMedio +"' type='application/pdf' width='800' height='600'></embed>");
				$("#contenedorPlayer").html(tmp);
			};


			$("#modalPlayer").modal();


			$("#modalPlayer").on('hide.bs.modal', function () {
					//Detiene el medio actual
					if (typeMedio=="mp3" || typeMedio=="mp4") {
						document.getElementById("currentMedio").pause();
					};
					typeMedio="";

					//reproduce nuevamente la intro
					audioInicio.play();
					//Limpia el contenedor del medio
					//$("#contenedorPlayer").empty();
    	});
	})
}

function playIntroAudio () {
			 audioInicio.play();
}




function muteSound(objeto) {
	if (audioOn) {
		audioInicio.pause();
		audioInicio.currentTime=0;
		$(objeto).attr("src","img/sinsonido.png");
	}else {
				audioInicio.play();

				$(objeto).attr("src","img/consonido.png");
	}
	audioOn=!audioOn;
	console.log(audioOn);
}
