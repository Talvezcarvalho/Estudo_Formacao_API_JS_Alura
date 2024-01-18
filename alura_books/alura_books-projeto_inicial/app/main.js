let livros = [];
const requisitionPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros();
const elementoValorLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')


async function getBuscarLivros() {
    const res = await fetch(requisitionPoint);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibeLivros(livrosComDesconto);
}
