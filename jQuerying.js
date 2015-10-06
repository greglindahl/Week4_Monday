$(document).ready(function($) {
	
	$('#hover').mouseenter(function() {
		$('#hover').css('background-color', 'red');
	})
	.click(function() {
		$('#hover').toggleClass('green')
	})
	.mouseleave(function() {
		$('#hover').css('background-color', '#39B7CD')
	});

	$('.hideMe').click(function() {
		$('.hideMe').hide();
	});

	$('.changeColor').click(function() {
		$('ul li:nth-child(3)').css('color', 'red');
	});

	$('#removeLi').click(function() {
		$('ul li:nth-child(2)').hide();
	});

	$('#removeLi').append('<li>This item is added</li>');

	$( ".cute" ).click(function () {
		$('.cute').clone().appendTo( ".clones" )
	});

});
