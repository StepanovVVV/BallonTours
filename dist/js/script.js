$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});

let menuBtn = document.querySelector('.navigation__button');
let menu = document.querySelector('.navigation__nav');
let bgMenu = document.querySelector('.navigation__background');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bgMenu.classList.toggle('active');
});

let btnLink1 = document.querySelector('.navigation__link_1');
let btnLink2 = document.querySelector('.navigation__link_2');
let btnLink3 = document.querySelector('.navigation__link_3');
let btnLink4 = document.querySelector('.navigation__link_4');
let btnLink5 = document.querySelector('.navigation__link_5');
btnLink1.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bgMenu.classList.toggle('active');
});
btnLink2.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bgMenu.classList.toggle('active');
});
btnLink3.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bgMenu.classList.toggle('active');
});
btnLink4.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bgMenu.classList.toggle('active');
});
btnLink5.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bgMenu.classList.toggle('active');
});