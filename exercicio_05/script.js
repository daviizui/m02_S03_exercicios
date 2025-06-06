const entrada = prompt("Digite um número para gerar uma matriz.");

function criaMatriz(numero) {
  const matriz = [];

  for (let i = 0; i < numero; i++) {
    matriz[i] = [];
    for (let j = 0; j < numero; j++) {
      if (i === j) {
        matriz[i][j] = 1;
      } else {
        matriz[i][j] = 0;
      }
    }
  }
  return matriz;
}

const matrizIdentidade = criaMatriz(parseFloat(entrada));
console.log(matrizIdentidade);
