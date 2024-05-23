var agora = new Date() 

var hora = agora.getHours()
console.log(`Agora é exatamente são ${hora} horas.`)

if (hora < 5){
    console.log(`boa madrugada`)
}else if (hora < 12){
    console.log(`Bom dia!`)
} else if (hora < 18){
    console.log(`Boa tarde!`)
}else  {
    console.log(`Boa noite!`)
}