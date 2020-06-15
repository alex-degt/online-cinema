$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 15,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});
});
