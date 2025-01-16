// Clase Alumno
class Alumno {
    // Propiedades
    nombre: string;
    edad: number;
    curso: string;

    // Constructor para inicializar las propiedades
    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    // Método para mostrar los datos del alumno
    mostrarDatos(): string {
        return `Nombre: ${this.nombre}<br>Edad: ${this.edad}<br>Curso: ${this.curso}`;
    }
}

// Función que crea un alumno y muestra sus datos
function mostrarDatosAlumno(): void {
    // Crear una instancia de la clase Alumno con los datos especificados
    const alumno = new Alumno("Pedro López", 18, "1CFSJ");

    // Obtener el div donde se mostrarán los datos
    const resultadoDiv = <HTMLDivElement>document.getElementById("resultado");

    // Mostrar los datos del alumno en el div
    resultadoDiv.innerHTML = alumno.mostrarDatos();
}
