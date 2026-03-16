const  nombre= document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const  telefono= document.getElementById("telefono");
const boton= document.getElementById("boton");

boton.addEventListener("click", function() {

    if (nombre.value === "" || apellido.value === "" || telefono.value === "") {
        alert("Por favor, complete todos los campos antes de enviar.");
        return;
    }

    const nombreValue = nombre.value;
    const apellidoValue = apellido.value;
    const telefonoValue = telefono.value;

    alert(nombreValue + " Se enviaron correctamente los datos");
    nombre.value="";
});