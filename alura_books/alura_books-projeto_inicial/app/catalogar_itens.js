const inserirLivro = document.getElementById('livros');

function exibeLivros(Livros) {
    elementoValorLivrosDisponiveis.innerHTML = ''
    inserirLivro.innerHTML = '';
    Livros.forEach(element => {
        //let disponibilidade = verificarDisponibilidade(element)
        let disponibilidade = element.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        inserirLivro.innerHTML += `<div class="livro">
        <img class="${disponibilidade}" src="${element.imagem}" 
        alt="${element.alt}"/>
        <h2 class="livro_titulo">${element.titulo}</h2>
        <p class="livro__descricao">${element.autor}<p>
        <p class="livro__preco" >${element.preco.toFixed(2)}<p>
        <div class="tags">
            <span class="tag">${element.categoria}</span>
        </div>
      </div>`
    });

    /*function verificarDisponibilidade(livro) {
        if( livro.quantidade > 0) {
            return 'livro__imagens'
        } else {
            return 'livro__imagens indisponivel'
        }
    }*/
}