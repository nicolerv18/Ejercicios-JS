class Producto{
constructor(nombre,precio,imagen){
this.nombre = nombre
this.precio = precio
this.imagen = imagen
this.cantidad = 1
}
}

let carrito = []

function agregarProducto(nombre,precio,imagen){

let productoExistente = carrito.find(p => p.nombre === nombre)

if(productoExistente){

productoExistente.cantidad++

}else{

let producto = new Producto(nombre,precio,imagen)

carrito.push(producto)

}

actualizarContador()

mostrarLista()
}

function actualizarContador(){

let total = 0

carrito.forEach(p=>{
total += p.cantidad
})

document.getElementById("contador").innerText = total
}

function mostrarLista(){

if(carrito.length === 0){
document.getElementById("lista").innerHTML="Carrito vacío"
return
}

let html=`
<table border="1">
<tr>
<th>Imagen</th>
<th>Producto</th>
<th>Precio</th>
<th>Cantidad</th>
<th>Subtotal</th>
<th>Acción</th>
</tr>
`

carrito.forEach((p,i)=>{

let subtotal = p.precio * p.cantidad

html+=`
<tr>
<td><img src="${p.imagen}" width="60"></td>
<td>${p.nombre}</td>
<td>$${p.precio}</td>
<td>${p.cantidad}</td>
<td>$${subtotal}</td>
<td><button onclick="eliminarProducto(${i})">❌</button></td>
</tr>
`
})

html+="</table>"

document.getElementById("lista").innerHTML=html
}

function eliminarProducto(index){

carrito.splice(index,1)

actualizarContador()

mostrarLista()
}

function verTotal(){

let total = 0

carrito.forEach(p=>{
total += p.precio * p.cantidad
})

document.getElementById("resultado").innerText="Total: $"+total
}

function vaciarCarrito(){

carrito=[]

actualizarContador()

mostrarLista()

document.getElementById("resultado").innerText=""
}