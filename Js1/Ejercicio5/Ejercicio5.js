const inputtext = document.getElementById("inputtext");
const boton = document.getElementById("boton");
const lista= document.getElementById("lista");

boton.addEventListener("click", function() {

    const texto = inputtext.value;
    const listaitem= document.createElement("li");
    listaitem.textContent = texto;
    lista.appendChild(listaitem);
    inputtext.value="";
});