export class course {
    constructor({
        name,
        classes,
        teacher,
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;
        this.classes = classes;
        this.teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() { //getter retorna name
        return this._name
    }

    set name(newName) { // setter cambiar name
        if (newName === "Curso feo wakala") { // Valida el nuevo nombre
            console.error("Ese no es un nombre bonito")
        } else {
            this._name = newName
        }
    }
}