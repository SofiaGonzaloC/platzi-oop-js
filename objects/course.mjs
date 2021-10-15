export class course {
    constructor({
        name,
        classes,
        teacher
    }) {
        this._name = name,
            this.classes = classes,
            this.teacher = teacher
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