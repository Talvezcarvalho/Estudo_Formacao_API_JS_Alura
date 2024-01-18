let botaoOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
botaoOrdenarPreco.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibeLivros(livrosOrdenados);

}