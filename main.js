import student from './objects/student.js'
import learningPath from './objects/learningPath.js'
import course from './objects/course.js'
import classes from './objects/classes.js'

// Courses
const inglesbasico = new course({
    name: "Inglés básico",
    teacher: "Fernanda Amorim Machado",
})

const estrategiasingles = new course({
    name: "Estrategias para aprender inglés online",
    teacher: "Andrea Velásquez"
})

const inglesprinc = new course({
    name: "Inglés para principiantes",
    teacher: "Gina Pedraza"
})

const computacion = new course({
    name: "Computación básica",
    teacher: "Ricardo Celis"
})

const programbasica = new course({
    name: "Programación básica",
    teacher: "Freddy Vega"
})

const algoritmos = new course({
    name: "Algoritmos y pensamiento lógico básico",
    teacher: "Ana Belisa Martínez"
})

// Learning Paths
const desarrolloWeb = new learningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        computacion,
        programbasica,
        algoritmos
    ]
})

const englishAcademy = new learningPath({
    name: "Escuela de Platzi English Academy",
    courses: [
        estrategiasingles,
        inglesprinc,
        inglesbasico
    ]
})

// Students
const juan = new student({
    name: "JuanDC",
    username: "juandc",
    email: "juan@mail.com",
    twitter: "fjuandc",
    learningPath: [
        desarrolloWeb,
        englishAcademy
    ]
})

const miguel = new student({
    name: "Miguel Felix",
    username: "miguelitofeliz",
    email: "miguel@mail.com",
    instagram: "miguelitofelixix"
})