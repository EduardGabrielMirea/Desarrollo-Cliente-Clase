// Clase Alumno
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrarDatos = function () {
        return "Mi nombre es ".concat(this.nombre, "\nTengo ").concat(this.edad, " a\u00F1os\nEstoy en ").concat(this.curso);
    };
    return Alumno;
}());
// Clase Curso que utiliza la clase Alumno
var Curso = /** @class */ (function () {
    function Curso(cursoNombre, alumno) {
        this.cursoNombre = cursoNombre;
        this.alumno = alumno;
    }
    Curso.prototype.mostrarDatosConCurso = function () {
        // Mostrar un alert con los datos del alumno y el nombre del curso
        alert("".concat(this.alumno.mostrarDatos(), "\n").concat(this.cursoNombre));
    };
    return Curso;
}());
// Función que crea el alumno, el curso y muestra los datos en el alert
function mostrarDatosConCurso() {
    // Crear una instancia de la clase Alumno
    var alumno = new Alumno("Pedro López", 18, "1CFSJ");
    // Crear una instancia de la clase Curso con el alumno
    var curso = new Curso("Primer curso de grado superior de DAW", alumno);
    // Mostrar los datos con el alert
    curso.mostrarDatosConCurso();
}
