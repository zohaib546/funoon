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
videos.forEach((el) => {
	el.muted = true;
	el.pause();
});
setTimeout(() => {
	videos[0].muted = true;
	videos[0].play();
}, 2000);

var video = $(".video-carousel");
video.owlCarousel();

// Listen to owl events:
video.on("changed.owl.carousel", function (event) {
	unmute.forEach((el) => {
		el.style.display = "none";
	});
	mute.forEach((el) => {
		el.style.display = "";
	});

	videos.forEach((el) => {
		el.muted = true;
		el.play();
	});
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

// Show and Hide SideNav
const menuBtn = document.querySelector(".header-nav__menu");
const sidebar = document.querySelector(".header-sidenav");
const menuList = document.querySelector(".header-nav__sidelist");

menuBtn.addEventListener("click", () => {
	sidebar.classList.toggle("show");
});

const movies = document.querySelectorAll(".movie__item");

// add popup on mouse enter
movies.forEach((movie) =>
	movie.addEventListener("mouseenter", (e) => {
		addPopup(e);
	})
);

// remove popup on mouse leave
movies.forEach((movie) =>
	movie.addEventListener("mouseleave", (e) => {
		console.log("mouse leave");
		removePopup(e);
	})
);

function addPopup(e) {
	let moviePost = e.target.closest(".movie__item");
	removePopup(e);
	console.log("mouse enter");
	setTimeout(() => {
		moviePost.insertAdjacentHTML(
			"beforeend",
			`<div class="item-controls item-controls--movie">
					<figure class="item-controls__figure">
						<img
							class="item-controls__thumbnail"
							src="img/landing-page/resume/poster-1.png"
							alt="icon"
						/>
						<video
							class="item-controls__video"
							src="video/banner-video.mp4"
							loop
							autoplay
							muted
						></video>
					</figure>
					<div class="item-controls__details">
						<h3 class="mb-3 item-controls__title">Bye Bye London</h3>
						<ul class="item-controls__list">
							<li class="item-controls__action">
								<a href="./player.html">
									<img
										class="item-controls__icon"
										src="img/popup/icons/icon-play.svg"
										alt="icon"
									/>
								</a>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-add.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-like.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-dislike.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-adult.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action ms-auto">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-remove-list.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-favorite.svg"
									alt="icon"
								/>
							</li>
							<li
								class="item-controls__action"
								data-bs-toggle="modal"
								data-bs-target="#movieModal"
							>
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-info.svg"
									alt="icon"
								/>
							</li>
						</ul>
					</div>
				</div>
			`
		);
	}, 500);
}

function removePopup(e) {
	setTimeout(() => {
		let moviePost = e.target.closest(".movie__item");
		let popup = moviePost.lastElementChild;

		if (popup.classList.contains("item-controls--movie")) {
			moviePost.removeChild(popup);
		}
	}, 500);
}

const movieContainer = document.querySelectorAll(".movie-popup__movies");
const movieShowMore = document.querySelectorAll(".movie-popup__show");

movieShowMore.forEach((shwMre) =>
	shwMre.addEventListener("click", (e) => {
		shwMre.classList.toggle("rotate");
		movieContainer.forEach((cont) => cont.classList.toggle("show-less"));
	})
);
