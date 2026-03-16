class Estudiante{
    constructor(nombre, edad, grado){
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
    }


    registrarEstudiante(){
        console.log(`Estudiante ${this.nombre} registrado exitosamente.`);
    }

    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Grado: ${this.grado}`);
    }

    consultarAprobacion(){
        if(this.grado >= 3.0){
            console.log(`El estudiante ${this.nombre} ha aprobado.`);
        } else {
            console.log(`El estudiante ${this.nombre} no ha aprobado.`);
        }

    }
}
