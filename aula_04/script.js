// 1- Criar um programa no qual o vendedor digitará o valor de um produto que ele comprou e o programa aumentará o valor do produto em 50% para que ele possa revender
let valorProduto = 10;
let valorRevenda = valorProduto * 1.5;
console.log("O valor de revenda do produto é: R$ " + valorRevenda.toFixed(2));
// tofixed(2) - É um método do tipo number que limita a 
// quantidade de casas decimais após a vírgula.

//==================================================================

// 2 - Desenvolver um pequeno script no qual o usuário digitará o valor de um investimento. O programa retornará 30% do valor digitado para que esse investidor saiba quanto irá render tal investimento.

let valorInvestimento = 10;
let rendimento = valorInvestimento * 0.3;
console.log("O rendimento do investimento é: R$ " + rendimento.toFixed(2));
//==================================================================

// 3 - Construir uma página na qual o usuário digitará o valor do seu salário e o programa aumentará 15% do seu salário digitado.
let salario = 100;
let novoSalario = salario * 1.15;
console.log("O novo valor do seu salário com aumento de 15% é: R$ " + novoSalario.toFixed(2));

//==================================================================

// 4 - Construir uma página na qual o usuário digitará o valor de um produto e o programa descontará 7% do valor do produto.
let valorProdutoDesconto  = 10;
let valorComDesconto = valorProdutoDesconto * 0.93;
console.log("O valor do produto com desconto de 7% é: R$ " + valorComDesconto.toFixed(2));