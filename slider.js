document.addEventListener("DOMContentLoaded", function mySlider(){

    const slider = document.querySelector(".slider");
    let currentIndex = 0;
    let totalSlides = document.querySelectorAll('.card').length;

    const myDiv = document.querySelector(".card");

    // Get the width of the div in pixels
    const divWidth = myDiv.offsetWidth;

    const screenWidth = window.innerWidth;

    let leanth = divWidth * totalSlides

    totalSlides = Math.ceil(leanth / screenWidth);

    function updateSlider() {
      const translateValue = -currentIndex * 100 + "%";
      slider.style.transform = `translateX(${translateValue})`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function autoScroll() {
      nextSlide();
    }


    if (totalSlides <= 2) {
      setInterval(autoScroll, 6000);

    } else if (totalSlides <= 5){
      setInterval(autoScroll, 4000);
    }else{
      setInterval(autoScroll, 3000);
    }
    
  });