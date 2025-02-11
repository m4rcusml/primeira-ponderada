let notas = [6.8, 8, 6.19];
let media = 0;

for (let i = 0; i < notas.length; i++) {
  media += notas[i];
}

media = media / 3;

if (media >= 7) {
  console.log('APROVADO');
} else {
  console.log('REPROVADO');
}

console.log(`Média final: ${media.toFixed(3)}`, '\n');

/* ---------------------------------------------------------------- */




// testando com prompt
// dar npm install readline-sync

const prompt = require('readline-sync');
let media2 = 0, i = 1;
let quantNotas = prompt.questionInt('Quantas notas voce deseja inserir? ');

while (i <= quantNotas) {
  i++;

  media2 += prompt.questionFloat(`Digite a nota ${i - 1}: `);
}

media2 = media2 / (i - 1);

if (media2 >= 7) {
  console.log('APROVADO');
} else {
  console.log('REPROVADO');
}

console.log('Média final: ', media2);