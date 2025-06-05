const frase = prompt("gite uma frase");

const palavras = frase.split(" ");

const fraseComMaiuscula = palavras.map((palavra) => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
});

const fraseEmMaiuscula = fraseComMaiuscula.join(" ");

console.log(fraseEmMaiuscula);
