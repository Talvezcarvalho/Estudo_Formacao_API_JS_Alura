const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]")

botaoIniciarCamera.addEventListener("click", async function() {
    const inicarVideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false})

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block"

    video.srcObject = inicarVideo
})
