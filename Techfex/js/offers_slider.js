document.addEventListener("DOMContentLoaded", function(){

    const sliderContainer = document.querySelector(".offers__container__slide");
    const sliderImages = document.querySelectorAll(".offers__container__slide__container");
    const leftArrow = document.querySelector(".offers__container__left");
    const rightArrow = document.querySelector(".offers__container__right");
    let offsetX = 0;

    rightArrow.addEventListener("click", function(){
        offsetX +=100;
        if(offsetX > 200){
            offsetX = 0;
        }
        sliderImages.forEach(function(slide) {
            slide.style.transform = `translateX(-${offsetX}%)`;
            slide.style.transition = "transform 1s ease-in-out";
        });
    });

    leftArrow.addEventListener("click", function(){
        offsetX -= 100;
        if(offsetX < 0){
            offsetX = 200;
        }
        sliderImages.forEach(function(slide) {
            slide.style.transform = `translateX(-${offsetX}%)`;
            slide.style.transition = "transform 1s ease-in-out";
        });
    });

});