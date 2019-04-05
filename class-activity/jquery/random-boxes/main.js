$(function() {
  // Your interactions go here
	$('.button').click(function(){
		var number = (Math.floor(Math.random() * 5));
		console.log(number)
		$('.box').removeClass('active');
		$('.box').eq(number).addClass('active');
	});
});
