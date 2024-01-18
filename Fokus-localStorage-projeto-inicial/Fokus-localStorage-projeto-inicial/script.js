const html = document.querySelector('html')
const descansoLongo = document.querySelector('.app__card-button--longo');
const descansoCurto = document.querySelector('.app__card-button--curto');
const foco = document.querySelector('.app__card-button--foco')
const titulo = document.querySelector('.app__title')
const banner = document.querySelector('.app__image')
const botoes = document.querySelectorAll('.app__card-button')
const musicaBotao = document.querySelector('#alternar-musica')
const iniciarOuPausar = document.querySelector('#start-pause span')
const iniciarOuPausarImg = document.querySelector(".app__card-primary-butto-icon")
const contador = document.querySelector('#timer')
const teste = document.querySelector('.app_button-more')

teste.addEventListener("click", () => {
    if (tarefaSelecionada) {
        tarefaSelecionada.concluida = true
        itemTarefaSelecionada.classList.add('app__section-task-list-item-complete')
        itemTarefaSelecionada.querySelector('botao').setAttribute('disabled', true) 
        updateLocalStorage();
}
})

const somPLay = new Audio('play.wav');
const somPause = new Audio('pause.mp3')
const somBeep = new Audio('beep.mp3')
const musica = new Audio('luna-rise-part-one.mp3');
musica.loop = true;

let intervalo = null;
let tempoDecorrido = 3
let tempoInicial = 0;

const btnTemporizador = document.querySelector('#start-pause') 


musicaBotao.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

descansoLongo.addEventListener('click', () => {
    tempoDecorrido = 900
    alterarContexto('descanso-longo');
    descansoLongo.classList.add('active')
});  

descansoCurto.addEventListener('click', () => {
    tempoDecorrido = 10
    alterarContexto('descanso-curto');
    descansoCurto.classList.add('active')
});

foco.addEventListener('click', () => {
    tempoDecorrido = 3
    alterarContexto('foco');
    foco.classList.add('active')
});

function alterarContexto(contexto) {
    exibeTempo()
    botoes.forEach((element) => {
        element.classList.remove('active')
    })
    html.setAttribute('data-contexto' , contexto)
    banner.setAttribute('src', `${contexto}.png`)

    switch (contexto) {
        case 'descanso-longo' :
            titulo.innerHTML = `Hora de voltar à superfície. Faça uma pausa longa.`
            break;

        case 'descanso-curto' :
            break;
    }
}

const timer = () => {
    if(tempoDecorrido <=5) {
        somBeep.play()
    }

    if (tempoDecorrido <= 0 ) {
        const focoAtivo = html.getAttribute('data-contexto') === 'foco'
        if (focoAtivo) {            
            var event = new CustomEvent("TarefaFinalizada", {
                detail: {
                    message: "A tarefa foi concluída com sucesso!",
                    time: new Date(),
                },
                bubbles: true,
                cancelable: true
            })};
            document.dispatchEvent(event);
        zerar()
        resetTimer(tempoInicial)
        return;
    }
    tempoDecorrido -= 1
    exibeTempo()
}

btnTemporizador.addEventListener('click', iniciar);

function iniciar() {
    tempoInicial = tempoDecorrido
    if(intervalo) {
        somPause.play()
        zerar();
    }
    else {
     somPLay.play()
     intervalo = setInterval(timer, 1000);
     iniciarOuPausar.textContent = 'Pausar'
     iniciarOuPausarImg.setAttribute('src', `imagens/pause.png`)
    }
}
function zerar () {
    clearInterval(intervalo);
    intervalo = null
    iniciarOuPausar.textContent = 'Começar'
    iniciarOuPausarImg.setAttribute('src', `imagens/play_arrow.png`)
    
}
console.log(iniciarOuPausarImg)

function exibeTempo(){
    const tempo = new Date(tempoDecorrido * 1000) ;
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    contador.innerHTML = `${tempoFormatado}`
}

function resetTimer(tempoInicial) {
    const tempo = new Date(tempoInicial * 1000) ;
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    contador.innerHTML = `${tempoFormatado}`
    tempoDecorrido = tempoInicial
}
exibeTempo();