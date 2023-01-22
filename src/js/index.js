const botonTrailer = document.querySelector(".boton");
const modal = document.querySelector(".modal");
const close = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDelVideo = video.src;

function alternarModal(){
    modal.classList.add("open");
}   


botonTrailer.addEventListener("click", () => { 
    alternarModal(); 
    video.setAttribute("src",linkDelVideo);
    
} );

close.addEventListener("click", () => { 
    console.log("Se cerro el video")
    modal.classList.remove("open")
    video.setAttribute("src","");
} );


