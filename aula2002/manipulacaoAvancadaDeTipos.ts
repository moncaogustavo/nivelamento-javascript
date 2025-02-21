// Exercicio 5

/* Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.

   Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.

*/

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log("Mensagem do servidor:", resposta);
  } else if (typeof resposta === "boolean") {
    console.log("Status da operação:", resposta ? "Sucesso" : "Falha");
  }
}

processarResposta("Operação concluída com sucesso!");
processarResposta(true);
processarResposta(false);

// Exercicio 6

/* Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).

   Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.

*/

interface Estudante {
    nome: string;
    curso: string;
  }
  
  interface Trabalhador {
    empresa: string;
    cargo: string;
  }
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Gustavo",
    curso: "Analise e Desenvolvimento de Sistemas",
    empresa: "Microsoft",
    cargo: "Desenvolvedor Junior"
  };
  
  console.log("Dados do estudante trabalhador:", estudanteTrabalhador);