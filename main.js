import student from './student.js'
import learningPath from './learningPath.js'

// Students
const juan = new student({
    name: "JuanDC",
    username: "juandc",
    email: "juan@mail.com",
    twitter: "fjuandc"
})

const miguel = new student({
    name: "Miguel Felix",
    username: "miguelitofeliz",
    email: "miguel@mail.com",
    instagram: "miguelitofelixix"
})

// Learning Paths
const desarrolloWeb = new learningPath({
    name: "Escuela de Desarrollo Web",
    cursos: [
        "Computación básica",
        "Programación básica",
        "Algoritmos y pensamiento lógico básico"
    ]
})

const englishAcademy = new learningPath({
    name: "Escuela de Platzi English Academy",
    cursos: [
        "Estrategias para aprender inglés online",
        "Inglés para principiantes",
        "Inglés básico"
    ]
})  