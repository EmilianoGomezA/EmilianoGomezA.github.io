document.addEventListener("DOMContentLoaded", function(){

    const navbarMenu = document.querySelector("#header__navbar");
    const hamburguerIcon = document.querySelector(".header__hamburguer__icon");

    hamburguerIcon.addEventListener("click", function(){
        navbarMenu.classList.toggle('header__navbar');
        navbarMenu.classList.toggle('header__navbar--hidden');
    });
});