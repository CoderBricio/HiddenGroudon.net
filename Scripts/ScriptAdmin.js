var clientes = 3
var lucro = 320


function descClientes(){
document.getElementById('quantidadeAssinantes').innerHTML = clientes
}

function descLucro(){
    document.getElementById('Lucro').innerHTML = ('R$' +lucro)

}

function Voltar(){
    location.href = "../index.html";

}

