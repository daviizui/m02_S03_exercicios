const diaprompt = prompt("Digite um número de dia");
const mesprompt = prompt("Digite um número de mês");
const anoprompt = prompt("Digite um número de ano");

const dia = +diaprompt;
const mes = +mesprompt;
const ano = +anoprompt;

let diaValido = false;
let mesValido = false;
let anoValido = false;

if (ano > 0 && ano < 9999) {
  anoValido = true;
} else {
  console.log("Ano inválido, digite um valor entre 0 e 9999");
}

if (mes >= 1 && mes <= 12) {
  mesValido = true;
} else {
  console.log("Mês inválido, digite um número entre 1 e 12");
}

let diasDoMes;
if (mes === 2) {
  diasDoMes = 28;
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  diasDoMes = 30;
} else {
  diasDoMes = 31;
}

if (dia >= 1 && dia <= diasDoMes) {
  diaValido = true;
} else {
  console.log(
    "Dia inválido, digite um dia correspondente ao mês selecionado anteriormente"
  );
}

if (anoValido === true && mesValido === true && anoValido === true) {
  console.log("Data válida");
} else {
  console.log("Data inválida");
}
