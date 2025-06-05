const capital = prompt("Digite o capital inicial");
const meses = prompt("Digite o periodo em meses da aplicação");

const capitalComposto = +capital * Math.pow(1 + 0.05, +meses);

console.log(capitalComposto);
