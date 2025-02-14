// Exercicio 1 (Estruturas de Controle)
let numero = -6;
if (numero > 0) console.log('Numero positivo');
else if (numero < 0) console.log('Numero negativo');
else console.log ('Numero é zero');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let soma = 0;
let contador = 1;
while (contador <= 5) {
    soma += contador;
    contador++;
}
console.log('Soma de 1 a 5: ', soma);

// Exercicio 2 
let opcao;
do {
    opcao = prompt('Digite A, B ou S para sair: ').toUpperCase();
    switch (opcao) {
        case 'A':
      console.log('Opção A selecionada');
      break;
    case 'B':
      console.log('Opção B selecionada');
      break;
    case 'S':
      console.log('Saindo...');
      break;
    default:
      console.log('Opção inválida');
    }
} while (opcao !== 'S');