
var propertyID;
var area;
var costPerSqFt;
var totalCost = area*costPerSqFt;

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


function Property (propertyID, area, costPerSqFt){
	this.propertyID = propertyID;
	this.area = area;
	this.costPerSqFt = costPerSqFt;
}


$(document).ready(function() {

	$(".generate").on("click", function(){
		
		propertyID = randomNumber(1000, 9999);     
		area = randomNumber(1000,9999);
		costPerSqFt = randomNumber(10,50);

		var newProperty = new Property(propertyID, area, costPerSqFt);


		var row = "<div class='propertyList'>" +
					"<div>Property ID : " + newProperty.propertyID + "</div>" +
					"<div>" + newProperty.area + " Sq. Ft.</div>" +
					"<div>$" + newProperty.costPerSqFt + " / sq.ft.</div>" +
					"<div><button class='removeButton'>Remove </button></div>"
				"</div>";


		$('#propertyList').append(row);
		row = $('#propertyList').children().last();
		row.hide().slideToggle('fast');

	});

			//Scott Bromander's notes in "//"
			//Advanced selector! 
			//This is new! ... SWEET!  .on('click', '.newProperty button', function

	 $('#propertyList').on('click', '.removeButton', function(){
	
		var $this = $(this);
		     //could use .closest() OR .parent().parent().remove;
		$(this).parent().parent().slideToggle('fast', function(){
			$this.remove();

		});
	});
});



