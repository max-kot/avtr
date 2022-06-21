$(function () {
	$('.slider__list').slick({
		infinite: true,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<img src="img/design/slider/prev.svg" alt="" class="slider__prev">',
		nextArrow: '<img src="img/design/slider/next.svg" alt="" class="slider__next">',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
					autoplay: false,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	);
});

/*--- Меню ---*/
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('active');
})

/*--- Кнопка на видео---*/
const videoPlayer = document.querySelector('.video-block__video');
const videoPlayBtn = document.querySelector('.video-block__button');

videoPlayBtn.addEventListener('click', function () {
	if (videoPlayer.play()) {
		videoPlayer.controls = true;
	}

})