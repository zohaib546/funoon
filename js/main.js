$(".video-carousel").owlCarousel({
	loop: false,
	margin: 0,
	nav: false,
	animateOut: "fadeOut",
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

// mute and unmute
const mute = document.querySelectorAll(".btn-mute");
const unmute = document.querySelectorAll(".btn-unmute");
const videos = document.querySelectorAll(".video__figure");

// hide all mute buttons on load
unmute.forEach((el) => {
	el.style.display = "none";
});

// mute all videos except first after image animation delay '2s'
videos.forEach((el) => (el.muted = true));
setTimeout(() => {
	videos[0].muted = true;
}, 2000);

var video = $(".video-carousel");
video.owlCarousel();

// Listen to owl events:
video.on("changed.owl.carousel", function (event) {
	// const section = event.target;
	// const sm = section.querySelector(".owl-item.active");
	unmute.forEach((el) => {
		el.style.display = "none";
	});
	mute.forEach((el) => {
		el.style.display = "";
	});

	videos.forEach((el) => (el.muted = true));
});

unmute.forEach((el, ind) =>
	el.addEventListener("click", (e) => {
		mute[ind].style.display = "";
		el.style.display = "none";
		videos[ind].muted = true;
	})
);

mute.forEach((el, ind) => {
	el.addEventListener("click", (e) => {
		unmute[ind].style.display = "";
		el.style.display = "none";
		videos[ind].muted = false;
	});
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
