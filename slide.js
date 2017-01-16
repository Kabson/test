	 $(document).ready(function() {

	// hide #back-top first
	$("span").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('span').fadeIn();
			} else {
				$('span').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('span').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 200);
			return false;
		});
	});

});

