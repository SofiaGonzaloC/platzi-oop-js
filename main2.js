// De la clase 7 y 9

const sofia = {
    name: "Sofia Gonzalez",
    username: "sofiagonzaloc",
    points: 100,
    socialMedia: {
        twitter: undefined,
        instagram: "sofiagonzaloc",
        facebook: "sofiagonzaloc"
    },
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS"
    ],
    rutasAprendizaje: [ // Una ruta tiene varios cursos, razón por la que se crea un ARRAY DE OBJETOS
        { // Ruta 1
            name: "Desarrollo web",
            cursos: [
                " HTML y CSS definitivo",
                "HTML y CSS práctico",
                "Curso responsive design"
            ]
        },
        { // Ruta 2
            name: "Inteligencia artificial y Machine learning",
            cursos: [
                "Python básico",
                "Análisis de negocio",
                "Pensamiento computacional con Python"
            ]
        }
    ]
}

const Jack = {
    name: "Jack Jackson",
    username: "jackjacko",
    points: 5,
    socialMedia: {
        twitter: "jacko",
        instagram: "jacko_ig",
        facebook: undefined
    },
    cursosAprobados: [
        "Design Thinking",
        "Illustrator"
    ],
    rutasAprendizaje: [
        { // Ruta 1
            name: "Escuela diseño gráfico",
            cursos: [
                "Illustrator",
                "Introducción al diseño"
            ]
        }
    ]
}

class student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        points = undefined,
        cursosAprobados = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        },
        this.points = points;
        this.cursosAprobados = cursosAprobados;
    }
}

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

class rutaAprendizaje{
    constructor({
        name,
        cursos
    }){
        this.name = name;
        this.cursos = cursos;
    }
}

const desarrolloWeb = new rutaAprendizaje({
    name: "Escuela de Desarrollo Web",
    cursos: [
        "Computación básica",
        "Programación básica",
        "Algoritmos y pensamiento lógico básico"
    ]
})

const englishAcademy = new rutaAprendizaje({
    name: "Escuela de Platzi English Academy",
    cursos: [
        "Estrategias para aprender inglés online",
        "Inglés para principiantes",
        "Inglés básico"
    ]
})