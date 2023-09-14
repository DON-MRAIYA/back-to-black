

function changeSlide(direction) {
  var slides = document.querySelectorAll(".testimonial");
  var currentSlide = slides[slides.length - 1];

  if (direction === 1) {
    currentSlide = currentSlide.nextElementSibling;
  } else {
    currentSlide = currentSlide.previousElementSibling;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  currentSlide.classList.add("active");
}
