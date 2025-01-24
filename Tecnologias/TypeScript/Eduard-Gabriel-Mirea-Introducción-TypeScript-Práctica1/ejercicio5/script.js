var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.addEventListener("DOMContentLoaded", function () {
    // Clase Alumno
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
    // Clase Curso
    var Curso = /** @class */ (function (_super) {
        __extends(Curso, _super);
        function Curso(nombre, edad, curso, descripcion) {
            var _this = _super.call(this, nombre, edad, curso) || this;
            _this.descripcion = descripcion;
            return _this;
        }
        Curso.prototype.mostrarDatosCompletos = function () {
            alert("Mi nombre es ".concat(this.nombre, "\n") +
                "Tengo ".concat(this.edad, " a\u00F1os\n") +
                "Estoy en ".concat(this.curso, " ").concat(this.descripcion));
        };
        return Curso;
    }(Alumno));
    function mostrarDatosAlumno() {
        var alumno = new Alumno("Pedro López", 18, "1CFSJ");
        var curso = new Curso(alumno.nombre, alumno.edad, alumno.curso, "Primer curso de grado superior de DAW");
        curso.mostrarDatosCompletos();
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
