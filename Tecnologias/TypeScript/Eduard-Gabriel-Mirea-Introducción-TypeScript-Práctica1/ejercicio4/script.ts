document.addEventListener("DOMContentLoaded", () => {
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

    function mostrarDatosAlumno(): void {
        const alumno = new Alumno("Pedro López", 18, "1CFSJ");

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
