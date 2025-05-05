let btnMenu = document.querySelector(".btn-menu");
let btnClose = document.querySelector(".btn-close");
let menu = document.querySelector(".navigation");

btnMenu.addEventListener("click", e => {

    menu.classList.add("active");

});

btnClose.addEventListener("click", e => {

    menu.classList.remove("active");

});

window.addEventListener("resize", e => {

    menu.classList.remove("active");

});