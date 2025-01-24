document.addEventListener("DOMContentLoaded", () => {
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
            return `
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Edad:</strong> ${this.edad}</p>
                <p><strong>Curso:</strong> ${this.curso}</p>
            `;
        }
    }

    // Clase Curso
    class Curso extends Alumno{
        descripcion: string;

        constructor(nombre: string, edad: number, curso: string, descripcion: string) {
            super(nombre, edad, curso);
            this.descripcion = descripcion;
        }

        mostrarDatosCompletos(): void {
            alert(
                `Mi nombre es ${this.nombre}\n` +
                `Tengo ${this.edad} años\n` +
                `Estoy en ${this.curso} ${this.descripcion}`
            );
        }
    }

    function mostrarDatosAlumno(): void {
        const alumno = new Alumno("Pedro López", 18, "1CFSJ");
        const curso = new Curso(alumno.nombre, alumno.edad, alumno.curso,"Primer curso de grado superior de DAW");

        curso.mostrarDatosCompletos();

        const resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            resultadoDiv.innerHTML = alumno.mostrarDatos();
        } else {
            console.error("No se encontró el elemento 'resultado'.");
        }
    }

    const botonMostrar = document.getElementById("mostrar-datos-alumno");
    botonMostrar?.addEventListener("click", mostrarDatosAlumno);
});
