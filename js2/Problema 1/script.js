class Cuenta {

    constructor(cliente) {
        this.cliente = cliente;
        this.saldo = 0;
    }

    ingresar(monto) {
        this.saldo += monto;
        return "Depósito realizado. Saldo actual: $" + this.saldo;
    }

    retirar(monto) {

        if (monto > this.saldo) {
            return "No hay saldo suficiente.";
        }

        this.saldo -= monto;
        return "Retiro realizado. Saldo actual: $" + this.saldo;
    }

    consultarSaldo() {
        return "El saldo de " + this.cliente + " es: $" + this.saldo;
    }
}

let cuentas = {};

function obtenerCuenta() {

    const nombre = document.getElementById("cliente").value;

    if (!nombre) {
        document.getElementById("resultado").textContent =
        "Debe ingresar un cliente";
        return null;
    }

    if (!cuentas[nombre]) {
        cuentas[nombre] = new Cuenta(nombre);
    }

    return cuentas[nombre];
}

function ingresarDinero() {

    const cuenta = obtenerCuenta();
    if (!cuenta) return;

    const monto = Number(document.getElementById("monto").value);

    const mensaje = cuenta.ingresar(monto);

    document.getElementById("resultado").textContent = mensaje;
}

function retirarDinero() {

    const cuenta = obtenerCuenta();
    if (!cuenta) return;

    const monto = Number(document.getElementById("monto").value);

    const mensaje = cuenta.retirar(monto);

    document.getElementById("resultado").textContent = mensaje;
}

function consultarSaldo() {

    const cuenta = obtenerCuenta();
    if (!cuenta) return;

    const mensaje = cuenta.consultarSaldo();

    document.getElementById("resultado").textContent = mensaje;
}