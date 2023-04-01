document.addEventListener("DOMContentLoaded", function(){

    const ADD_TO_CART_BUTTON = document.querySelectorAll(".populars__container__product__actions__add-to-cart");
    const CART_ICON_NUMBER = document.querySelector(".header__shopping__cart__items");
    let productsAdded = 0;

    for (let i = 0; i < ADD_TO_CART_BUTTON.length; i++) {
        ADD_TO_CART_BUTTON[i].addEventListener("click", function(){
            productsAdded += 1;
            CART_ICON_NUMBER.style.display = "flex";
            CART_ICON_NUMBER.innerHTML = productsAdded;
        });
    }

});