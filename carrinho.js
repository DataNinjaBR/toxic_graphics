// carrinho.js
var carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto: produto, preco: preco });
    alert('Adicionado ao carrinho: ' + produto);
}
