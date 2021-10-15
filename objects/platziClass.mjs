export class PlatziClass{
    constructor({
        name,
        videoID,
        teacher
    }){
        this.name = name,
        this.videoID = videoID,
        this.teacher = teacher
    }

    play(){
        videoPlay(this.videoID)
    }
    
    pause(){
        videoPause(this.videoID)
    }
}

function videoPlay(id){ // Recibe el ID de un video para reproducirlo
    const Urlsecreta = "https://secreto.com"
    console.log("Se está reproduciendo desde la URL " + Urlsecreta)
}

function videoPause(id){
    const Urlsecreta = "https://secreto.com"
    console.log("Se pausó desde la URL " + Urlsecreta)
}