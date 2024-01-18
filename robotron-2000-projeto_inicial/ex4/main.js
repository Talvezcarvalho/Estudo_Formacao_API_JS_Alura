const botaoMostrar = document.querySelector('[data-botaoMostrar]');
const botaoEsconder = document.querySelector('[data-botaoEsconder]')
const lista = document.querySelector('[data-lista]');



botaoMostrar.addEventListener('click' , () =>{
    lista.setAttribute('data-lista', 'mostrar');  
})

botaoEsconder.addEventListener('click', () =>{
    lista.setAttribute('data-lista', 'ocultar');
})

