$(document).ready(function () {
	// Fixed NAV on scroll
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 750) {
			$("#nav-top").addClass("nav-top--fixed");
		} else {
			$("#nav-top").removeClass("nav-top--fixed");
		}
	});

	// Mobile NAV visible on click
	$("#nav-toggle").on("click", function () {
		$(".nav__menu").toggleClass("nav__menu--visible");
		$("body").toggleClass("body-fixed");
		$("#background").toggleClass("background--active");
	});

	// Button "Show more" #1
	$(function () {
		if (screen.width < 769) $(".trends-card").slice(0, 4).show();
		else $(".trends-card").slice(0, 10).show();
		$("#load-more").on("click", function (e) {
			e.preventDefault();
			$(".trends-card:hidden").slice(0, 5).slideDown();
		});
	});

	// Button "Show more" #2
	$(function () {
		$(".news-card").slice(0, 4).show();
		$("#news-more").on("click", function (e) {
			e.preventDefault();
			$(".news-card:hidden").slice(0, 4).slideDown();
		});
	});

	// OwlCarousel #1
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
				items: 2,
			},
			600: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1000: {
				items: 5,
			},
		},
	});
});
