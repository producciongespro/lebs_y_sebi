
$(document).ready(function(){	
	playIntroAudio ();

	addEventStopAudio();
	
	
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

function addEventStopAudio () {
	$(".img-circle").click(function (){
		
		//Detiene el audio intro
			document.getElementById("audioInicio").pause();	
			document.getElementById("audioInicio").currentTime=0;
			
			
		//Crea el objeto audio lo renderiza y abre el modal
			
			var pathMedio =  $(this).attr("path"),
			typeMedio = $(this).attr("medio"); 
			
			if (typeMedio=="audio") {
				var tmp = $("<audio id='currentMedio' preload='true' autoplay='true' controls></audio>");
				$(tmp).attr("src", pathMedio);		
				$("#contenedorPlayer").html(tmp);			
			};
			
			if (typeMedio=="video") {
				var tmp = $("<video id='currentMedio' preload='true' autoplay='true' controls></video>");
				$(tmp).attr("src", pathMedio);		
				$("#contenedorPlayer").html(tmp);			
			};
			
			
			$("#modalPlayer").modal();
			
			
			$("#modalPlayer").on('hide.bs.modal', function () {            
			//Detiene el medio actual
			document.getElementById("currentMedio").pause();
			
			//reproduce nuevamente la intro
			document.getElementById("audioInicio").play();
			//Limpia el contenedor del medio
			//$("#contenedorPlayer").empty();
    });
		
	})	
}

function playIntroAudio () {
	var tmpAudio = document.getElementById("audioInicio");
			console.log (tmpAudio);
			tmpAudio.play();
}

