// Clase Alumno
class Alumno {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarDatos(): string {
        return `Mi nombre es ${this.nombre}\nTengo ${this.edad} años\nEstoy en ${this.curso}`;
    }
}

// Clase Curso que utiliza la clase Alumno
class Curso {
    cursoNombre: string;
    alumno: Alumno;

    constructor(cursoNombre: string, alumno: Alumno) {
        this.cursoNombre = cursoNombre;
        this.alumno = alumno;
    }

    mostrarDatosConCurso(): void {
        // Mostrar un alert con los datos del alumno y el nombre del curso
        alert(`${this.alumno.mostrarDatos()}\n${this.cursoNombre}`);
    }
}

// Función que crea el alumno, el curso y muestra los datos en el alert
function mostrarDatosConCurso(): void {
    // Crear una instancia de la clase Alumno
    const alumno = new Alumno("Pedro López", 18, "1CFSJ");

    // Crear una instancia de la clase Curso con el alumno
    const curso = new Curso("Primer curso de grado superior de DAW", alumno);

    // Mostrar los datos con el alert
    curso.mostrarDatosConCurso();
}
