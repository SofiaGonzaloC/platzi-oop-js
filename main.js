// De la clase 5 y 6

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

console.group("Prototipo con la sintaxis de función")
function student(name, age, cursosAprobados) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
}
student.prototype.aprobarCurso = function (curso) { // Añade la función aprobarCurso al objeto prototipo student
    this.cursosAprobados.push(curso)
}
// Instancia
const juanita = new student(
    "Juanita Alejandra",
    15,
    ["POO", "Introducción a videojuegos", "Introducción a diseño"]
)
console.groupEnd()

console.group("Prototipos con la sintaxis de clases")
class student2 {
    constructor(name, age, cursosAprobados) { // metodo que se ejecuta
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}
// Instancia
const miguel = new student2(
    "Miguel Álvarez",
    25,
    [
        "Análisis de negocios",
        "Principios de visualización de datos"
    ]
)
console.groupEnd()

console.group("Recibir UN solo parámetro que sea de tipo objeto")
class student3 {
    constructor({ name, age, cursosAprobados}) {
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}
//Instancia
const jose = new  student3({
    name: "Jose",
    age: 28,
    cursosAprobados: [
        "ES2016",
        "Creación de videojuegos"
    ]
})
console.groupEnd()