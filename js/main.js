// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header tag
var header = document.getElementById("myheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the heaer when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}

// window.scrollBy({
//     top: 100, // could be negative value
//     left: 0,
//     behavior: 'smooth'
// });

// Option 2 - jQuery Smooth Scrolling
// $('.container a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },800);
//   }
// });

 // Option 3 - Smooth Scroll - https://github.com/cferdinandi/smooth-scroll
// const scroll = new SmoothScroll('.container a[href*="#"]', {
//     speed: 500
// });


// // slideshow images
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 4000); // Change image every 2 seconds
// }