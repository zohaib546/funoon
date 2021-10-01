$(".video-carousel").owlCarousel({
	loop: false,
	margin: 0,
	nav: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

$(".drama-carousel").owlCarousel({
	loop: true,
	margin: 5,
	nav: true,
	mouseDrag: false,
	dots: false,
	stagePadding: 50,
	navText: [
		"<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
		"<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
	],
	responsive: {
		0: {
			items: 3,
		},
		600: {
			items: 6,
		},
		1000: {
			items: 9,
		},
	},
});
