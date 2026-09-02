let alunos = [
    {nome: "Ana", idade: 20, nota:6.5,},
    {nome: "João", idade: 18, nota:5.0,},
    {nome: "Carla", idade: 22, nota:7.5,},
    {nome: "Marina", idade: 19, nota:8.5,},

];
somaNotas =0; 

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome)
    console.log(alunos[i].idade)
    console.log(alunos[i].nota)

    somaNotas += alunos[i].nota

}

let mediaGeral = somaNotas / alunos.length
    console.log("Media da Turma", mediaGeral);