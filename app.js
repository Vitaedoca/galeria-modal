const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

function fechaGaleria(){
    gM.style.visibility = "hidden"; /*Aqui colocamos que a visibilidade dele vai ser oculta*/
}
function abriGaleria(src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src
}