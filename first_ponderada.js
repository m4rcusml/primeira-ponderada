// dar npm install readline-sync antes de rodar

const prompt = require('readline-sync');

function calcularMedia(notas) {
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }

  return (somaNotas / notas.length).toFixed(3);
}

let notas = [], i = 0;
let quantNotas = prompt.questionInt('Quantas notas voce deseja inserir? ');

while (i < quantNotas) {
  i++;

  notas.push(prompt.questionFloat(`Digite a nota ${i}: `));
}

if (calcularMedia(notas) >= 7) {
  console.log('\nSituação: APROVADO');
} else {
  console.log('\nSituação: REPROVADO');
}

console.log('----------------------------');
console.log('Média final: ', calcularMedia(notas));
console.log('----------------------------');
