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
for (let i = 0; i < catalogoPrintTech.length; i++) {
    console.log(catalogoPrintTech[i].nome);
    console.log(catalogoPrintTech[i].preco);
}
