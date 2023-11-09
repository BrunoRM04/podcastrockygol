document.getElementById("menu-button").addEventListener("click", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
});
const menuButton = document.getElementById("menu-button");
let isCross = false;
menuButton.addEventListener("click", function() {
    isCross = !isCross;
    if (isCross) {
        menuButton.textContent = "✖"; // Cambia el contenido del botón a una cruz
    } else {
        menuButton.textContent = "☰"; // Restablece el contenido del botón a las tres barras
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const welcome = document.querySelector('.welcome');
    welcome.style.opacity = '1';
    welcome.style.transform = 'translateY(0)';
});