$(document).ready(function() {
	$('.btn').click(function(event) {
		/* Act on the event */
		$(this).delay(500).fadeOut();
		$('.bgpic').fadeOut();
		$('.touch').fadeOut();
		$('.righthand, .lefthand').toggleClass('active');
		$('.name').fadeOut('slow', function() {
			
		});

		$('.card').fadeIn(3000);
		$('.couple').fadeIn(3000);
		$('.light').show().toggleClass('animated fadeInDown');
		


	});
});