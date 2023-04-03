document.addEventListener("DOMContentLoaded", function(){

    //ELEMENTOS GENERALES
    const OVERLAY = document.querySelector(".header__overlay");
    const BODY = document.querySelector("body");

    //ELEMENTOS DEL MENÚ DROPDOWN
    const OPEN_MENU = document.querySelector(".header__menu__open");
    const CLOSE_MENU = document.querySelector(".header__menu__close");
    const DROPDOWN_MENU = document.querySelector(".header__mobile__menu");

    //ELEMENTOS DEL MENÚ DE LOGIN
    const OPEN_LOGIN = document.querySelector(".header__user__icon");
    const CLOSE_LOGIN = document.querySelector(".header__mobile__login__close");
    const LOGIN_MENU = document.querySelector(".header__mobile__login");

    //ELEMENTOS DEL MENÚ BUSCADOR
    const OPEN_BROWSER = document.querySelector(".header__search__icon");
    const CLOSE_BROWSER = document.querySelector(".header__mobile__search__close");
    const HEADER_BROWSER = document.querySelector(".header__mobile__search");


    //FUNCIONES MENÚ DROPDOWN

    function openMenu(event) {
        event.stopPropagation();
        OPEN_MENU.style.transform = "scale(0)";
        CLOSE_MENU.style.transform = "scale(1)";
        DROPDOWN_MENU.style.clipPath = "inset(0 0 0 0)";
        OVERLAY.style.display = "block";
        OVERLAY.style.backgroundColor = "rgba(0,0,0,0.5)";
        BODY.style.overflow = "hidden";

        //EVITAR QUE SE UNA CON BUSCADOR
        HEADER_BROWSER.style.clipPath = "inset(0 0 100% 0)";
        HEADER_BROWSER.style.zIndex = "1";
        OVERLAY.style.top = "0rem";
    }

    function closeMenu() {
        CLOSE_MENU.style.transform = "scale(0)";
        OPEN_MENU.style.transform = "scale(1)";
        DROPDOWN_MENU.style.clipPath = "inset(0 100% 0 0)";
        OVERLAY.style.display = "none";
        OVERLAY.backgroundColor = "transparent";
        BODY.style.overflow = "auto";
    }

    OPEN_MENU.addEventListener("click", openMenu);

    CLOSE_MENU.addEventListener("click", closeMenu);


    //FUNCIONES MENÚ DE LOGIN

    function openLogin(event){
        event.stopPropagation();
        LOGIN_MENU.style.clipPath = "inset(0 0 0 0)";
        OVERLAY.style.display = "block";
        OVERLAY.style.backgroundColor = "rgba(0,0,0,0.5)";
        BODY.style.overflow = "hidden";

        //EVITAR QUE SE UNA CON BUSCADOR
        HEADER_BROWSER.style.clipPath = "inset(0 0 100% 0)";
        HEADER_BROWSER.style.zIndex = "1";
        OVERLAY.style.top = "0rem";
    }

    function closeLogin(){
        LOGIN_MENU.style.clipPath = "inset(0 0 0 100%)";
        OVERLAY.style.display = "none";
        OVERLAY.backgroundColor = "transparent";
        BODY.style.overflow = "auto";
    }

    OPEN_LOGIN.addEventListener("click", openLogin);
    CLOSE_LOGIN.addEventListener("click", closeLogin);


    //FUNCIONES MENÚ DE BÚSQUEDA

    function openBrowser(event){
        event.stopPropagation();
        HEADER_BROWSER.style.clipPath = "inset(0 0 0 0)";
        HEADER_BROWSER.style.zIndex = "12";
        OVERLAY.style.display = "block";
        OVERLAY.style.backgroundColor = "rgba(0,0,0,0.5)";
        OVERLAY.style.top = "3.75rem";
        BODY.style.overflow = "hidden";
    }


    function closeBrowser(){
        HEADER_BROWSER.style.clipPath = "inset(0 0 100% 0)";
        OVERLAY.style.display = "none";
        OVERLAY.style.backgroundColor = "transparent";
        OVERLAY.style.top = "0rem";
        BODY.style.overflow = "auto";
    }

    OPEN_BROWSER.addEventListener("click", openBrowser);
    CLOSE_BROWSER.addEventListener("click", closeBrowser);



    //FUNCION GENERAL, SI SE DA CLICK EN ALGÚN LUGAR FUERA DE LOS MENÚS, SE CERRARÁN

    document.addEventListener("click", function(event) {
        if (!DROPDOWN_MENU.contains(event.target) && !LOGIN_MENU.contains(event.target) && !HEADER_BROWSER.contains(event.target)) {
            closeMenu();
            closeLogin();
            closeBrowser();
        }
    });
});