async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
var consultaCEPConvertido = await consultaCEP.json();
if (consultaCEPConvertido.erro) {
    throw Error('CEP não existente!');
}
var cidade = document.getElementById('cidade');
var logradouro = document.getElementById('endereco');
var estado = document.getElementById('estado');

cidade.value =  consultaCEPConvertido.localidade;
logradouro.value = consultaCEPConvertido.logradouro;
estado.value = consultaCEPConvertido.uf;
console.log(consultaCEPConvertido);
    }catch (erro) {
        console.log(erro);  
        mensagemErro.innerHTML =  '<p> CEP inválido. Tente Novamente!<p>'
    } 
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));



/*.then(resposta => resposta.json())
.then( r =>  {
    if (r.erro) {
        throw Error('Destinatario Ausente')
    }
console.log(r)}) 
.catch(erro => console.log(erro))
.finally(mensagem => console.log("Processamento Concluido"));*/