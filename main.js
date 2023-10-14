// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll('.slider .dots li');

// let active = 0; 
// let lengthitems = items.length - 1;

// next.onclick = function(){
//     if(active + 1 > lengthitems){
//         active = 0;
//     }else{
//         active = active + 1;
//     }
//     reloadSlider();
// }

// function reloadSlider(){
//     let checkLeft = items[active].offsetLeft;
//     list.style.left = -checkLeft + 'px';

//     let lastActiveDot = document.querySelector('.slider .dots li.active');
//     lastActtiveDot.classList.remove('active');
//     dots[active].classList.add('active');
// }

let slideIndex = 0;
showSlides();

// function plusDivs(n){
//     showSlides(slideIndex += n);
// }

// function currentDiv(n){
//     showSlides(slideIndex = n);
// }

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
//   if (n > slides.length) {slideIndex = 0}   
//   if(n < 1){
//     slides = dots.length
//   }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

// // slider 2
// let slideIndex2 = 1;
// showSlides(slideIndex2);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex2 += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex2 = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex2 = 1}
//   if (n < 1) {slideIndex2 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex2-1].style.display = "block";
//   dots[slideIndex2-1].className += " active";
// } 

