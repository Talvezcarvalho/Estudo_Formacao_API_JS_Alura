const elementoDica = document.querySelector(".dica")
const fundo = document.querySelector("body");
function verificaValidez(chute) {
    const numero =+chute;

    if (notANumber(numero)) {
        if (chute.toUpperCase() == "GAME OVER") {
            document.querySelector(".titulo").textContent = "GameOver!"
            document.querySelector(".dica").remove();
            document.querySelector(".box").remove();  
        }
        const dica = document.querySelector(".dica")
        dica.textContent = "Valor inválido"
        fundo.style.backgroundColor ='red';
        return;
    }

    if (numeroForaDeEscopo(numero)) {
        const dica = document.querySelector(".dica");
        dica.textContent =`Valor inválido, o número está entre ${menorValor} e ${maiorValor}`
        fundo.style.backgroundColor ='orange';

        return;
    }

    if(numero === numeroSecreto) {
        document.querySelector(".titulo").textContent = "Parabens você acertou!"
        document.querySelector(".dica").remove();   
        var restartButton = document.createElement('button');
        restartButton.textContent="Reiniciar";
        restartButton.className = 'restart_button';
        fundo.classList.add('transition')
        fundo.style.backgroundColor = '#40F8FF'
        restartButton.id = 'reiniciar'
        document.querySelector("#chute").appendChild(restartButton);

    } else if(numero < numeroSecreto) {
        elementoDica.innerHTML = `O número secreto é maior <i class="fa-solid fa-arrow-up purple"></i>`
        fundo.style.backgroundColor = 'var(--cor-secundaria)'

    } else if (numero > numeroSecreto) {
        elementoDica.innerHTML = `O número secreto é menor <i class="fa-solid fa-arrow-down purple"></i>`
        fundo.style.backgroundColor ='var(--cor-quartenaria)'
    }
}
function notANumber(numero) {
    return Number.isNaN(numero);
}

function numeroForaDeEscopo(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'reiniciar') {
        window.location.reload();
    }
})