document.addEventListener("DOMContentLoaded", function () {
    var Alumno = /** @class */ (function () {
        function Alumno(nombre, edad, curso) {
            this.nombre = nombre;
            this.edad = edad;
            this.curso = curso;
        }
        Alumno.prototype.mostrarDatos = function () {
            return "\n                <p><strong>Nombre:</strong> ".concat(this.nombre, "</p>\n                <p><strong>Edad:</strong> ").concat(this.edad, "</p>\n                <p><strong>Curso:</strong> ").concat(this.curso, "</p>\n            ");
        };
        return Alumno;
    }());
    function mostrarDatosAlumno() {
        var alumno = new Alumno("Pedro López", 18, "1CFSJ");
        var resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            resultadoDiv.innerHTML = alumno.mostrarDatos();
        }
        else {
            console.error("No se encontró el elemento 'resultado'.");
        }
    }
    var botonMostrar = document.getElementById("mostrar-datos-alumno");
    botonMostrar === null || botonMostrar === void 0 ? void 0 : botonMostrar.addEventListener("click", mostrarDatosAlumno);
});
