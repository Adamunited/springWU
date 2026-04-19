let layer = document.querySelector(".fade-layer");
let button = document.querySelector(".burger-btn");
let menu = document.querySelector(".nav-knappar");

button.addEventListener("click", showMenu);
layer.addEventListener("click", showMenu);

function showMenu() {
    menu.classList.toggle("show");
    layer.classList.toggle("visible");
}