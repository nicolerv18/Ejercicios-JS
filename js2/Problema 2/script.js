class Tecnologia {

    constructor(producto, precio, cantidad){
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    registrarProducto(){
        return "Producto registrado: " + this.producto + " | Precio: $" + this.precio + " | Cantidad: " + this.cantidad;
    }

    consultarInformacion(){
        return "Producto: " + this.producto + " | Precio: $" + this.precio + " | Cantidad: " + this.cantidad;
    }

    calcularTotal(){
        return this.precio * this.cantidad;
    }
}

let productos = {};

function ingresarProducto() {
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);


    // isNaN valida que precio y cantidad sean números válidos
    if (!nombre || isNaN(precio) || isNaN(cantidad)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    const tecnologia = new Tecnologia(nombre, precio, cantidad);
    const mensaje = tecnologia.registrarProducto();

    productos[nombre] = tecnologia;

    document.getElementById("resultado").innerHTML = mensaje;

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
}

function consultarInformacion(){
    const nombre = document.getElementById("nombre").value;

    if(productos[nombre]){
        const mensaje = productos[nombre].consultarInformacion();
        document.getElementById("resultado").innerHTML = mensaje;
    } else {
        document.getElementById("resultado").innerHTML = "Producto no encontrado.";
    }
}

function calcularTotal(){
    const nombre = document.getElementById("nombre").value;

    if(productos[nombre]){
        const total = productos[nombre].calcularTotal();
        document.getElementById("resultado").innerHTML =
        "Total a pagar por " + nombre + ": $" + total;
    } else {
        document.getElementById("resultado").innerHTML = "Producto no encontrado.";
    }
}