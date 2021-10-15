// En este archivo se encuentran las instancias de los objetos

import {FreeStudent, BasicStudent, ExpertStudent} from './objects/student.mjs'
import {learningPath} from './objects/learningPath.mjs'
import {course} from './objects/course.mjs'
import {PlatziClass} from './objects/platziClass.mjs'
import {comment} from './objects/comment.mjs'

// platziClass
const modulos = new PlatziClass({
    name: "Módulos de ECMAScript 6",
    videoID: 456,
})

modulos.play()
modulos.pause()


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
    teacher: "Freddy Vega",
    isFree: true
})

const algoritmos = new course({
    name: "Algoritmos y pensamiento lógico básico",
    teacher: "Ana Belisa Martínez",
    lang = "english"
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
const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juan@mail.com",
    twitter: "fjuandc",
    learningPath: [
        desarrolloWeb,
        englishAcademy
    ]
})

const miguel = new BasicStudent({
    name: "Miguel Felix",
    username: "miguelitofeliz",
    email: "miguel@mail.com",
    instagram: "miguelitofelixix"
})

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddy@mail.com",
    twitter: "freddier"
})