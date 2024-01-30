let currentSlide = 1;
let totalSlides = 4;
document.getElementById(`slide${currentSlide}`).style.opacity = 1;
document.getElementById(`slide${currentSlide}`).style.visibility = 'visible';
function changeSlide () {
document.getElementById(`slide${currentSlide}`).style.opacity = 0;
document.getElementById(`slide${currentSlide}`).style.visibility = 'hidden';
currentSlide = (currentSlide % totalSlides) + 1;
document.getElementById(`slide${currentSlide}`).style.opacity = 1;
document.getElementById(`slide${currentSlide}`).style.visibility = 'visible';
console.log(currentSlide)
}
setInterval(changeSlide, 3000);