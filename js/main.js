// DOM ELEMENTS
const mute = document.querySelectorAll(".btn-mute");
const unmute = document.querySelectorAll(".btn-unmute");
const videos = document.querySelectorAll(".video__figure");
const menuBtn = document.querySelector(".header-nav__menu");
const sidebar = document.querySelector(".header-sidenav");
const menuList = document.querySelector(".header-nav__sidelist");
const movies = document.querySelectorAll(".movie__item");
const movieContainer = document.querySelectorAll(".movie-popup__movies");
const movieShowMore = document.querySelectorAll(".movie-popup__show");

// GLOBAL DATA
let prevSlideIndex = 0;
const mainCarousel = ".video-carousel";
const activeSlideClasses = ".video .owl-item.active .video__figure";

const videoDetails = {
	element: ".video-carousel-en",
	loop: false,
	margin: 0,
	nav: false,
	mouseDrag: false,
	stagePadding: 0,
	dots: true,
	navText: [`&#x27;next&#x27;,&#x27;prev&#x27;`], // default navText
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
};

const videoDetailsRTL = {
	element: ".video-carousel-ar",
	loop: false,
	margin: 0,
	nav: false,
	mouseDrag: false,
	stagePadding: 0,
	dots: true,
	navText: [`&#x27;next&#x27;,&#x27;prev&#x27;`], // default navText
	animateOut: "fadeOut",
	rtl: true,
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
};

const movieDetails = {
	element: ".movie-carousel-en",
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
			items: 7,
		},
		1920: {
			items: 7,
		},
	},
};

const movieDetailsRTL = {
	element: ".movie-carousel-ar",
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
	rtl: true,
	responsive: {
		0: {
			items: 3,
			nav: false,
		},
		600: {
			items: 6,
		},
		1000: {
			items: 7,
		},
		1920: {
			items: 7,
		},
	},
};

const exclusiveDetails = {
	element: ".exclusive-carousel-en",
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
};

const exclusiveDetailsRTL = {
	element: ".exclusive-carousel-ar",
	loop: true,
	margin: 5,
	nav: true,
	mouseDrag: false,
	dots: false,
	navText: [
		"<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
		"<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
	],
	rtl: true,
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
};

const topDetails = {
	element: ".top-carousel-en",
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
};

const topDetailsRTL = {
	element: ".top-carousel-ar",
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
	rtl: true,
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
};

const resumeDetails = {
	element: ".resume-carousel-en",
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
			items: 2,
			nav: false,
			stagePadding: 50,
		},
		600: {
			items: 4,
		},
		1000: {
			items: 4,
			stagePadding: 50,
		},
		1300: {
			items: 5,
			stagePadding: 50,
		},
		1920: {
			items: 7,
		},
		2000: {
			items: 8,
		},
	},
};

const resumeDetailsRTL = {
	element: ".resume-carousel-ar",
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
	rtl: true,
	responsive: {
		0: {
			items: 2,
			nav: false,
			stagePadding: 50,
		},
		600: {
			items: 4,
		},
		1000: {
			items: 4,
			stagePadding: 50,
		},
		1300: {
			items: 5,
			stagePadding: 50,
		},
		1920: {
			items: 7,
		},
	},
};

// HIDE ALL MUTE BUTTONS 'onLoad'
unmute.forEach((el) => {
	el.style.display = "none";
});

// MUTE & PAUSE ALL VIDEOS 'onLoad'
videos.forEach((el) => {
	el.muted = true;
	el.pause();
});

// PLAY FIRST VIDEO AFTER 'cover-animation' DELAY 2S 'onLoad'
setTimeout(() => {
	videos[0].muted = true;
	videos[0].play();
}, 2000);

slider({ ...videoDetails });
slider({ ...videoDetailsRTL });
slider({ ...movieDetails });
slider({ ...movieDetailsRTL });
slider({ ...exclusiveDetails });
slider({ ...exclusiveDetailsRTL });
slider({ ...topDetails });
slider({ ...topDetailsRTL });
slider({ ...resumeDetails });
slider({ ...resumeDetailsRTL });

// CALLS WHEN SLIDE CHANGES
$(mainCarousel).on("changed.owl.carousel", function (event) {
	const currentSlideIndex = event.item.index;

	if (videos[prevSlideIndex].muted === true) {
		resetPrevSlide();
		handleCurrentSlide(currentSlideIndex, true, "", "none");
	} else {
		resetPrevSlide();
		handleCurrentSlide(currentSlideIndex, false, "none", "");
	}

	prevSlideIndex = currentSlideIndex;
});

// PAUSE SLIDE ON SCROLL
window.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop > 300) {
		if (document.querySelector(activeSlideClasses).paused === false) {
			document.querySelector(activeSlideClasses).pause();
		}
	} else {
		document.querySelector(activeSlideClasses).play();
	}
});

// UNMUTE: WHEN USER CLICKS UNMUTE BUTTON
unmute.forEach((element, index) =>
	element.addEventListener("click", (e) => {
		handleMuteAndUnmute("mute", element, index, "", "none", true);
	})
);

// MUTE: WHEN USER CLICKS MUTE BUTTON
mute.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		handleMuteAndUnmute("unmute", element, index, "", "none", false);
	});
});

// SHOW AND HIDE SIDENAV:
menuBtn.addEventListener("click", () => {
	sidebar.classList.toggle("show");
});

// ADD POPUP ON MOUSE ENTER
movies.forEach((movie) =>
	movie.addEventListener("mouseenter", (e) => {
		addPopup(e);
	})
);

// REMOVE 'POPUP' ON MOUSE LEAVE
movies.forEach((movie) =>
	movie.addEventListener("mouseleave", (e) => {
		removePopup(e);
	})
);

// SHOW MORE
movieShowMore.forEach((shwMre) =>
	shwMre.addEventListener("click", (e) => {
		shwMre.classList.toggle("rotate");
		movieContainer.forEach((cont) => cont.classList.toggle("show-less"));
	})
);

function addPopup(e) {
	let moviePost = e.target.closest(".movie__item");
	removePopup(e);
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

function handleMuteAndUnmute(btnType, element, index, btnStyle, elementStyle, isMuted) {
	btnType === "mute"
		? (mute[index].style.display = btnStyle)
		: (unmute[index].style.display = btnStyle);
	element.style.display = elementStyle;
	videos[index].muted = isMuted;
}

function slider(details) {
	$(details.element).owlCarousel({
		loop: details.loop,
		margin: details.margin,
		nav: details.nav,
		mouseDrag: details.mouseDrag,
		stagePadding: details.stagePadding,
		dots: details.dots,
		navText: details.navText,
		animateOut: details.animateOut || false,
		responsive: details.responsive,
		rtl: details.rtl || false,
	});
}

function resetPrevSlide() {
	videos[prevSlideIndex].pause();
	videos[prevSlideIndex].muted = true;
	mute[prevSlideIndex].style.display = "";
	unmute[prevSlideIndex].style.display = "none";
}

function handleCurrentSlide(curInd, isMuted, muteStye, unmuteStyle) {
	videos[curInd].play();
	videos[curInd].muted = isMuted;
	mute[curInd].style.display = muteStye;
	unmute[curInd].style.display = unmuteStyle;
}
