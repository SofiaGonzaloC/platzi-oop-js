export class learningPath{
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}