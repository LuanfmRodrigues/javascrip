function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
   //let hora =22
    msg.innerHTML = `${data}.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background ='#d68596'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background ='#5b7dec'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#5a5555'
    }
    }
