// Clase Alumno
var Alumno = /** @class */ (function () {
    // Constructor para inicializar las propiedades
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    // Método para mostrar los datos del alumno
    Alumno.prototype.mostrarDatos = function () {
        return "Nombre: ".concat(this.nombre, "<br>Edad: ").concat(this.edad, "<br>Curso: ").concat(this.curso);
    };
    return Alumno;
}());
// Función que crea un alumno y muestra sus datos
function mostrarDatosAlumno() {
    // Crear una instancia de la clase Alumno con los datos especificados
    var alumno = new Alumno("Pedro López", 18, "1CFSJ");
    // Obtener el div donde se mostrarán los datos
    var resultadoDiv = document.getElementById("resultado");
    // Mostrar los datos del alumno en el div
    resultadoDiv.innerHTML = alumno.mostrarDatos();
}
