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

$(".movie-carousel").owlCarousel({
	loop: true,
	margin: 5,
	nav: true,
	mouseDrag: false,
	stagePadding: 50,
	dots: false,
	navText: [
		"<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
		"<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
	],
	responsive: {
		0: {
			items: 3,
			nav: false,
		},
		600: {
			items: 6,
		},
		1000: {
			items: 9,
		},
		1920: {
			items: 9,
		},
	},
});

$(".exclusive-carousel").owlCarousel({
	loop: true,
	margin: 5,
	nav: true,
	mouseDrag: false,
	dots: false,
	navText: [
		"<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
		"<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
	],
	responsive: {
		0: {
			items: 2,
			nav: false,
			stagePadding: 50,
		},
		600: {
			items: 5,
		},
		1000: {
			items: 6,
		},
		1920: {
			items: 6,
		},
	},
});

$(".top-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	mouseDrag: false,
	stagePadding: 80,
	dots: false,
	navText: [
		"<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
		"<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
	],
	responsive: {
		0: {
			items: 2,
			nav: false,
			stagePadding: 30,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
			stagePadding: 50,
		},
		1920: {
			items: 6,
		},
		2000: {
			items: 8,
		},
	},
});

$(".resume-carousel").owlCarousel({
	loop: true,
	margin: 5,
	nav: true,
	mouseDrag: false,
	stagePadding: 0,
	dots: false,
	navText: [
		"<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
		"<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
	],
	responsive: {
		0: {
			items: 1,
			nav: false,
			stagePadding: 50,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
			stagePadding: 50,
		},
		1920: {
			items: 6,
		},
	},
});
