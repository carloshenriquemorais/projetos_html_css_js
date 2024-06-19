function carregar() {

var msg = document.getElementById('msg')
var foto = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
if (hora >= 6 && hora < 13) { 
    document.body.style.background = '#56bbff'
    foto.src = 'imagens/day.png' } 
else if (hora >= 13 && hora < 18) { 
    document.body.style.background = '#ffe77d'
    foto.src = 'imagens/afternoon.png' } 
    else { 
        document.body.style.background = '#1b1a25'
        foto.src = 'imagens/night.png' } 
    }