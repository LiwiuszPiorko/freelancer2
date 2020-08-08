let activeElement = 0;
const timeChange = 4000;

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');


const colorImages = ['img/s1.png', 'img/s2a.png'];
const grayImages = ['img/s1a.png', 'img/s2abl.png'];
const names = ['Liwiusz Piórko', 'Adam Kowalski'];
const professions = ['Programista Java, JS', 'Programista Java, JS'];

function changeElement() {
  activeElement++;
  if (activeElement == colorImages.length) {
    activeElement = 0;
  }
  colorImgHtml.src = colorImages[activeElement];
  grayImgHtml.src = grayImages[activeElement];
  h1Html.textContent = names[activeElement];
  h2Html.textContent = professions[activeElement];

}

setInterval(changeElement, timeChange)

$(".burger").on("click", function () {
  $(".fas, nav").toggleClass("off");
})

$('.kadra').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.info').offset().top
  }, 500)
})
$('.slogan').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.motto').offset().top
  }, 500)
})

$('.projekty').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.projects').offset().top
  }, 500)
})

$('.kontakt').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.contact').offset().top
  }, 500)
})
$('.contact button,span.hide').on('click', function () {
  $('.modal-wrap').toggleClass('active');
})