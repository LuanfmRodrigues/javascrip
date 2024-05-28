function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'virgem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhote.png')

            }
        } else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','donzela.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src','doidona.png')
            } else {
                //idosa
                img.setAttribute('src','veia.png')
            }        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}