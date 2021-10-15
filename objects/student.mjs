export class student{
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