const entrada = prompt(
  "Digite o nome de uma região (Norte, Nordeste, Centro-Oeste, Sudeste, Sul"
);
const peso = prompt("Digite po peso do produto.");

const entradaFormatada = entrada.toLowerCase();
const pesoFormatado = parseFloat(peso);
let freteCalculado;

switch (entradaFormatada) {
  case "norte":
    freteCalculado = 24 + 2.2 * pesoFormatado;
    console.log("O frete ficará como valor de R$" + freteCalculado.toFixed(2));
    break;
  case "nordeste":
    freteCalculado = 22 + 2.1 * pesoFormatado;
    console.log("O frete ficará como valor de R$" + freteCalculado.toFixed(2));
    break;
  case "centro-oeste":
    freteCalculado = 20 + 2 * pesoFormatado;
    console.log("O frete ficará como valor de R$" + freteCalculado.toFixed(2));
    break;
  case "sudeste":
    freteCalculado = 16 + 1.8 * pesoFormatado;
    console.log("O frete ficará como valor de R$" + freteCalculado.toFixed(2));
    break;
  case "sul":
    freteCalculado = 18 + 1.9 * pesoFormatado;
    console.log("O frete ficará como valor de R$" + freteCalculado.toFixed(2));
    break;
  default:
    console.log("Região inválida.");
    break;
}
