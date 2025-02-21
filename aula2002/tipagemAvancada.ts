// Exercicio 1

/* Crie uma interface chamaca Carro, que contenha as seguintes prioridades: 
    - marca (string)
    - modelo (string)
    - ano (number)
    - motor (opcional, string)

   Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.

*/

interface Carro{
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Volkswagen",
    modelo: "Jetta GLI",
    ano: 2025,
    motor: "2.0 Turbo"
};

console.log("Dados do meu carro: ", meuCarro);

// Exercicio 2

/* Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
    
   Depois, implemente essa função e teste com diferentes valores.

*/

interface Multiplicacao{
    (a: number, b:number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log("Multiplicacao de 8 e 7: ", multiplicar(8, 7));
console.log("Multiplicacao de 9 e 6: ", multiplicar(9, 6));