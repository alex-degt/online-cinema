$(document).ready(function () {
	$(function () {
		$(".trends-card").slice(0, 5).show();
		$("#load-more").on("click", function (e) {
			e.preventDefault();
			$(".trends-card:hidden").slice(0, 5).slideDown();
		});
	});

	$(function () {
		$(".news-card").slice(0, 4).show();
		$("#news-more").on("click", function (e) {
			e.preventDefault();
			$(".news-card:hidden").slice(0, 4).slideDown();
		});
	});

	$(".slider-one").owlCarousel({
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

	$(".slider-two").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 5,
			},
			1000: {
				items: 8,
			},
		},
	});

	$("#trends-card--wrapper").mixItUp();

	$(".trends__filter").click(function () {
		$(".trends__filter").not(this).removeClass("trends__filter--active");
		$(this).toggleClass("trends__filter--active");
	});
});
