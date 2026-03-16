const botonAzul = document.getElementById("cambiarAzul");
const botonRojo = document.getElementById("cambiarRojo");
const botonVerde = document.getElementById("cambiarVerde");

botonAzul.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(83, 83, 163)";
});

botonRojo.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(163, 83, 83)";
});

botonVerde.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(83, 163, 83)";
});
