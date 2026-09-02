let produtos = [
    {nome: "Mouse",  quantidade:12, preco:9.90,},
    {nome: "Teclado",  quantidade:8, preco:35.90,},
    {nome: "Memoria",  quantidade:4, preco:150.00,},
    {nome: "Processador",  quantidade:3, preco:480.00,},
    {nome: "Monitor",  quantidade:5, preco:749.90,},
    
]
for(let i=0;i<produtos.length;i++){
    console.log(produtos[i].nome);
    console.log(produtos[i].preco);
}