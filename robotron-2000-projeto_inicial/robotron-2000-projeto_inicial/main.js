const robo = document.querySelector('.robotron');


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


const subtrair = document.querySelector('#subtrai');
const somar = document.querySelector('#soma');
const braco = document.querySelector('#braco');
const controleCor = document.querySelectorAll('[data-controleCor]');
console.log(controleCor);
const cores = ["azul","vermelho", "amarelo", "branco", "preto", "rosa"];

const controle = document.querySelectorAll('[data-controle');
const estatisticas = document.querySelectorAll('[data-estatistica]');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizarEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    })
});

controleCor.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento.target.dataset.controleCor);
        trocarCor(evento.target.dataset.controleCor, evento.target.parentNode);
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if ( operacao === '-') {    
        peca.value = parseInt(peca.value) -1;
    }
    else {
        peca.value = parseInt(peca.value) +1;
    }
}

function atualizarEstatisticas (peca , operacao) {
    estatisticas.forEach ((elemento) => {
        if (operacao === '+') {
        elemento.textContent =parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }

        else {
            elemento.textContent =parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
    }
    )
}

function trocarCor (botao, controle) {
    const corTextual = controle.querySelector('.cor-atual');
    const corAtual = corTextual.dataset;   
    var   indexCor = cores.indexOf(corAtual);
    console.log(corAtual);
    console.log(corTextual);

    if ((botao ==="proximo") && (indexCor < cores.length-1)) {
        indexCor += 1;
       corTextual.textContent = cores[indexCor];
    }
    if ((botao === "anterior") && (indexCor > 0)) {
        indexCor -= 1;
        corTextual.textContent = cores[indexCor];
    }

    var srcImg = `img/Robotron-${corTextual.textContent}.png`;
    document.getElementById("robotron").src=srcImg;


    
}