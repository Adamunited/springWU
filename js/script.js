document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector(".fade-layer");
    let button = document.querySelector(".burger-btn");
    let menu = document.querySelector("nav");

    if (button && layer && menu) {
        button.addEventListener("click", showMenu);
        layer.addEventListener("click", showMenu);
    }

    function showMenu() {
        menu.classList.toggle("show");
        layer.classList.toggle("visible");
    }
});