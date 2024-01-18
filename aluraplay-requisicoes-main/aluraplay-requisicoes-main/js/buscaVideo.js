import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
async function buscarVideo (evento) {
    evento.preventDefault
    
    const dadoPesquisa= document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadoPesquisa);

    const lista = document.querySelector("[data-lista]");
    
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);    
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        )); 
}

const botaoDePesquisa = document.querySelector("[data-botao_pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))