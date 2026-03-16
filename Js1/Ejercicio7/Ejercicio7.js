const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

let operacion = "";

sumar.addEventListener("click", function() {
    operacion = "sumar";
});

restar.addEventListener("click", function() {
    operacion = "restar";
});

multiplicar.addEventListener("click", function() {
    operacion = "multiplicar";
});

dividir.addEventListener("click", function() {
    operacion = "dividir";
});

boton.addEventListener("click", function() {

    const n1 = parseFloat(number1.value);
    const n2 = parseFloat(number2.value);

    let res;

    if (operacion === "sumar") {
        res = n1 + n2;
    } 
    else if (operacion === "restar") {
        res = n1 - n2;
    } 
    else if (operacion === "multiplicar") {
        res = n1 * n2;
    } 
    else if (operacion === "dividir") {

        if (n2 === 0) {
            resultado.textContent = "No se puede dividir por 0";
            return;
        }

        res = n1 / n2;
    }

    resultado.textContent = "Resultado: " + res;

});