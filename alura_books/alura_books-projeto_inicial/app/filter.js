const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtarLivros));

function filtarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria =='disponivel' ? filtarPorDisponibilidade() :  filtrarPorCategoria(categoria);
    exibeLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorLivros(livrosFiltrados)
        AtualizarValorTotal(valorTotal)
    }
}
function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function calcularValorLivros(livros) {
    return livros.reduce((acc, livro) =>
        acc+livro.preco, 0 ).toFixed(2)
}
function AtualizarValorTotal(total) {
    elementoValorLivrosDisponiveis.innerHTML = ` <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
  </div>`
}