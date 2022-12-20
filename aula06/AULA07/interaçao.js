function carregar(){
var msg = document.getElementById('msg')
//var img = window.document.getElementById('imagem')
var data = new Date()
var minuto = data.getMinutes()
var hora = data.getHours()
//var hora = 14
msg.innerHTML = `Agora são ${hora}h e ${minuto}minutos`

function addImage(src, width, height, alt) {
    const imageMoon =document.querySelector(".imageMoon")
    var image = document.createElement("img");
    image.src =src;
    image.width = width;
    image.height = height;
    image.alt = alt;
    imageMoon.appendChild(image);
}

if (hora >= 0 && hora < 12){
    mensagem.innerHTML=`Bom dia`
    addImage('./imagens/manha.webp',250,250,'Manha')
    document.body.style.background = '#AB3737'
} else if (hora >= 12 && hora <= 18) {
    mensagem.innerHTML=`Boa Tarde`
    addImage('./imagens/tarde_1.webp',250,250,'tarde')
    //img.innerHTML='< img.src = "tarde_1.webp" >'
    document.body.style.background = '#A69595'
} else {
    mensagem.innerHTML=`Boa Noite`
    addImage('./imagens/noite_1.webp',250,250,'noite')
    //img.innerHTML= ' img.src = ("noite_1.webp" >'
    document.body.style.background = '#261A1A'
}
}