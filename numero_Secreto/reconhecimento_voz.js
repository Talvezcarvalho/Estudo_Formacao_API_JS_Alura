const elementoChute = document.querySelector('.box');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValidez(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.textContent = chute;

}

recognition.addEventListener('end', () => recognition.start());