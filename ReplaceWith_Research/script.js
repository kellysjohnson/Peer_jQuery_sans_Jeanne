



$(document).ready(function() {
	
	$("p").click(function(){
			$(this).replaceWith( "<p class=pink>" + $(this).text() + "</p>" );
			$(".not").replaceWith("<p class=blue> NOT</p>");
	});


	$( ".example3" ).click(function(){
  		$( this ).replaceWith( "<button class='example31'>WINNER!</button>" );
	});



var i = 1;

	if(i<5){
	$( ".example4" ).click( function(){
  			$(this).replaceWith( "<button class='example2'+ i >WINNER " + i + "!</button>" );
  			i++;
		});
	}
});