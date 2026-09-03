const entrada = require('readline-sync');    

let catalogoPrintTech = [
    { nome: "Base controle Caveira 3D", quantidade: 10, preco: 150.00 },
    { nome: "Suporte Parede Headset 3D", quantidade: 5, preco: 80.00 },
    { nome: "Vaso Decorativo 3D", quantidade: 20, preco: 45.00 },
    { nome: "Luminária 3D", quantidade: 15, preco: 120.00 },
    { nome: "Porta Canetas 3D", quantidade: 25, preco: 30.00 },
    { nome: "Miniatura Personagem 3D", quantidade: 8, preco: 60.00 },
]
function adicionarProduto(nome, quantidade, preco) {
    catalogoPrintTech.push({ nome: nome, quantidade: quantidade, preco: preco });
}
function listarProdutos() {
    for (let i = 0; i < catalogoPrintTech.length; i++) {
        console.log("Nome: " + catalogoPrintTech[i].nome);
        console.log("Quantidade: " + catalogoPrintTech[i].quantidade);
        console.log("Preço: R$" + catalogoPrintTech[i].preco);
        console.log("------------------------");
    }
} 
function buscarProduto(nome) {
    for (let i = 0; i < catalogoPrintTech.length; i++) {
        if (catalogoPrintTech[i].nome === nome) {
            console.log("Produto encontrado:");
            console.log("Nome: " + catalogoPrintTech[i].nome);
            console.log("Quantidade: " + catalogoPrintTech[i].quantidade);
            console.log("Preço: R$" + catalogoPrintTech[i].preco);
            return;
        }
    }
    console.log("Produto não encontrado.");
}  
function atualizarProduto(nome, novaQuantidade, novoPreco) {
    for (let i = 0; i < catalogoPrintTech.length; i++) {
        if (catalogoPrintTech[i].nome === nome) {
            catalogoPrintTech[i].quantidade = novaQuantidade;
            catalogoPrintTech[i].preco = novoPreco;
            break;
        }
    }
}                       
function calcularTotalEstoque() {
    catalogoPrintTech.reduce((total, produto) => {
        return total + (produto.quantidade * produto.preco);
    }, 0);
    return total;
}
function removerProduto(nome) {
    for (let i = 0; i < catalogoPrintTech.length; i++) {
        if (catalogoPrintTech[i].nome === nome) {
            catalogoPrintTech.splice(i, 1);
            break;   
        }
    }
}   
let sistemaAtivo = true;
while (sistemaAtivo) 
    console.log("Bem-vindo ao Gerenciador de Estoque da PrintTech 3D!");
    console.log("Escolha uma opção:");
    console.log("1 - Adicionar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto");
    console.log("4 - Atualizar produto");
    console.log("5 - Calcular total do estoque");
    console.log("6 - Remover produto");
    console.log("7 - Sair");

    let opcao = entrada.question("Digite o número da opção desejada: ");
    switch (opcao) {
        case "1":
            let nomeProduto = entrada.question("Digite o nome do produto: ")
