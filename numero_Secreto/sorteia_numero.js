const menorValor = 1;
const maiorValor = 1000; 
const numeroSecreto = randomNumber();


function randomNumber() {
    return parseInt(Math.random()*maiorValor+1);
}
console.log(numeroSecreto);

const elementoMenorNumero = document.getElementById("menor_valor");
elementoMenorNumero.innerHTML = menorValor;

const elementoMaiornumero = document.getElementById("maior_valor");
elementoMaiornumero.innerHTML = maiorValor;