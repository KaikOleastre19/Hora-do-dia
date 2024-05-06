function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=0 && hora<12){
        img.src = `fotomanha.jpg`
        document.body.style.background = "rgba(231, 239, 15, 0.904)"
    }

    if(hora>=12 && hora<18){
        img.src = `fototarde.jpg`
        document.body.style.background = "rgba(233, 121, 23, 0.751)"
   
    }   

    if(hora>=18 && hora<=23){
        img.src = `fotonoite.jpg`
        document.body.style.background = "rgba(49, 47, 45, 0.751)"

    }

}
