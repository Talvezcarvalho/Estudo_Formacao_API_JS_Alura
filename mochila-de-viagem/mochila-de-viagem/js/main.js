const dados = document.getElementById("novoItem");
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (elemento) => {
    criarElementos(elemento);
})

dados.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'];
    const quant = evento.target.elements['quantidade'];

    const existe = itens.find( elemento => elemento.nome === nome.value);
    
    const itemAtual = {
        "nome" : nome.value,
        "quantidade" : quant.value
    }

    if(existe) {
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
        itens[existe.id] = itemAtual;
    }
    else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id +1 : 0;
        criarElementos(itemAtual);
        itens.push(itemAtual);
    }
    

    
    
    
    
    localStorage.setItem("itens", JSON.stringify(itens));
    
    nome.value = '';
    quant.value = '';
});

function criarElementos(objeto) {

const novoITEM = document.createElement('li');
novoITEM.classList.add("item");

const numeroItem = document.createElement('strong');
numeroItem.innerHTML = objeto.quantidade;
numeroItem.dataset.id = objeto.id

novoITEM.appendChild(numeroItem)
novoITEM.innerHTML += objeto.nome;

novoITEM.appendChild(botaoDeleta(objeto.id))

lista.appendChild(novoITEM);
}

function atualizaElemento(elemento) {
   document.querySelector("[data-id='"+elemento.id+"']").innerHTML = elemento.quantidade;
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "X"
    elementoBotao.addEventListener("click", function(){
        deletaElemento(this.parentNode, id)
    })
    return elementoBotao;

}

function deletaElemento(item, id) {
    item.remove()

    itens.splice(itens.findIndex(elemento => elemento.id == id), 1);
    
    localStorage.setItem("itens" , JSON.stringify(itens));

}