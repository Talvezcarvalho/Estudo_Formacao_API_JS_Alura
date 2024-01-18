function tocarSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    
    if(elemento && elemento.localName === 'audio') {
         elemento.play;
    }
    else {
        console.log('elemento non encontrado!');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');



for( let count = 0; count < listaDeTeclas.length; count++ ) {

    const tecla = listaDeTeclas[count];
    const instrumento = tecla.classList[1];


    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    } 

    tecla.onkeydown =  function(evento) {
        if( evento.code === 'Space' || evento.code === "Enter"){
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}



/*

}
document.querySelector('.tecla_pom').onclick = tocarSomPom;

function tocarSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocarSomClap;

function tocarSomTim () {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocarSomTim;

function tocarSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocarSomPuff;

function tocarSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocarSomSplash;

function tocarSomToim () {
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocarSomToim;

function tocarSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocarSomPsh;

function tocarSomTic () {
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocarSomTic;

function tocarSomTom () {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocarSomTom;
*/