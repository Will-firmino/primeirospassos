//  O(a) professor(a) irá digitar a nota tirada pelo aluno. 

//  Caso seja menor do que 0 ou maior do que 10, o programa irá escrever “Nota Inválida”; 

//  se for maior ou igual a 0 e menor do que 4, o programa irá escrever, “aluno reprovado”.

//  Se a nota for maior ou igual a 4 e menor do que 7, o programa irá escrever “Aluno em Recuperação” 

//  e, caso seja maior ou igual a 7 e menor ou igual a 10, escreverá “Aluno Aprovado”.

let nota = 5;

if(nota < 0 || nota > 10) {
    console.log("@@@ NOTA INVÁLIDA @@@");
} else if(nota >= 0 && nota < 4) {
    console.log("ALUNO REPROVADO");
} else if(nota >= 4 && nota < 7) {
    console.log("ALUNO EM RECUPERAÇÃO");
} else if(nota >= 7 && nota <= 10) {
    console.log("ALUNO APROVADO");
}