// Se o horário for menor que 12:00, diga Bom dia
// Se não, diga Boa tarde.
// let hora = 12;

// if(hora <= 12) {
//     console.log("Bom dia!");
// } else {
//     console.log("Boa tarde");
// }
// ================================================
// Pizzaria S sabores
// calabresa, frango, queijo, alho
// Não temos essa pizza
let saborPizza = "QuEiJo"; // queijo
if(saborPizza.toLowerCase() == "calabresa") {
    console.log("Saindo uma pizza de calabresa");
} else if(saborPizza.toLowerCase() == "frango") {
    console.log("Saindo uma pizza de frango");
} else if(saborPizza.toLowerCase() == "queijo") {
    console.log("Saindo uma pizza de queijo");
} else if(saborPizza.toLowerCase() == "alho") {
    console.log("Saindo uma pizza de alho");
} else {
    console.log("Não temos essa pizza :(");
}

