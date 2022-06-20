$(function () {

});

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('active');
})