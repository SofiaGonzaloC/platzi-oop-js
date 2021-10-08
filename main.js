const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "HTML y CSS definitivo",
        "HTML y CSS práctico",
    ],
    aprobarCurso(curso) {
        // this hace referencia al objeto "Natalia"
        this.cursosAprobados.push(curso)
    }
}

function student(name, age, cursosAprobados){
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
}

student.prototype.aprobarCurso = function(curso) { // Añade la función aprobarCurso al objeto prototipo student
    this.cursosAprobados.push(curso)
}

const juanita = new student(
    "Juanita Alejandra",
    15,
    ["POO", "Introducción a videojuegos", "Introducción a diseño"]
)