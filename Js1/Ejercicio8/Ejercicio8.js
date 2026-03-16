const input = document.getElementById("inputtext");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");
const limpiar = document.getElementById("limpiar");

boton.addEventListener("click", function(){

    const texto = input.value;

    if(texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";

    eliminar.addEventListener("click", function(){
        lista.removeChild(li);
    });

    li.appendChild(eliminar);

    lista.appendChild(li);

    input.value = "";
});

limpiar.addEventListener("click", function(){
    lista.innerHTML = "";
});