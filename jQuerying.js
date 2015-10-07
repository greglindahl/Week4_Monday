$(document).ready(function($) {
	
	$('#hover').mouseenter(function() {
		$('#hover').css('background-color', 'red');
	})
	.click(function() {
		$('#hover').toggleClass('green')
	})
	.mouseleave(function() {
		$('#hover').css('background-color', '#39B7CD');
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

	$('#addMe').click(function() {
		$('#addMe').append('<li>This item is added</li>');
	});

	$('#makeBig').click(function() {
		$(this).css('font-size', '40px');
		$('.hideThis').hide();
	});

	$(".cute").click(function() {
		var dogImage = $(this);
		while ($('img.cute').length < 20) {
			$(this).clone().appendTo(".clones")
		}
	});

	$('html').dblclick(function() {
		$('#makeSquare').css('border-radius', '0');
	});

	$('#dontClick').click(function() {
		alert("Don't click here!")
	});

	$('.black').click(function() {
		$('html').toggleClass('black');
	});

	$('.wood').click(function() {
		$('html').toggleClass('wood');
	});

	$('.chaos').click(function() {
		$('html').toggleClass('chaos');
	});

	$('.restore').click(function() {
		$('html').toggleClass('restore');
	});

});
