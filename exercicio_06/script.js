const entrada = prompt("Digite um número para ser limite da sequência:");
const limite = parseFloat(entrada);

if (isNaN(limite) || limite < 0) {
  console.log(
    "Por favor, digite um número válido e não negativo para o limite."
  );
} else {
  let a = 0;
  let b = 1;

  const sequenciaFibonacci = [];

  if (limite >= 0) {
    sequenciaFibonacci.push(a);
  }

  if (limite >= 1) {
    sequenciaFibonacci.push(b);
  }

  while (a + b <= limite) {
    let proximoNumero = a + b;
    sequenciaFibonacci.push(proximoNumero);
    a = b;
    b = proximoNumero;
  }

  console.log("Sequência Fibonacci até o limite " + limite + ":");
  console.log(sequenciaFibonacci.join(", "));
}
