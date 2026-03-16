let clics = 0;

const boton = document.getElementById("btnContador");
const texto = document.getElementById("contador");

boton.addEventListener("click", function() {

    clics++;
    texto.textContent = "Clics: " + clics;
});