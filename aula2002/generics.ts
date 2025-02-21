// Exercicio 3

/* Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.

   Teste a função com um array de números e um array de strings.

*/

function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

const numeros = [1,2,3,4,5];
const frutas = ["cereja", "amora", "abacaxi"];

console.log("Array invertido (numeros): ", inverterArray(numeros));
console.log("Array invertido (frutas): ", inverterArray(frutas));

// Exercicio 4

/* Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].

   Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).

*/

interface Repositorio<T> {
    salvar(dado: T): void;
    pegarTodos(): T[];
  }
  
  interface Usuario {
    nome: string;
    email: string;
  }
  
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    pegarTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  
  const repo = new RepositorioUsuario();
  repo.salvar({ nome: "Alice", email: "alice@example.com" });
  repo.salvar({ nome: "Bob", email: "bob@example.com" });
  
  console.log("Usuários cadastrados:", repo.pegarTodos());