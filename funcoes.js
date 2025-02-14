// Exercicio 1 (Funções e Escopo)
function converterParaMaiusculo(text) {
    let mensagem = 'Convertendo... Aguarde.';
    return text.toUpperCase();
}

const converterParaMaiusculoArrow = (text) => {
    let mensagem = 'Convertendo... Aguarde.';
    return text.toUpperCase();
};

// console.log(mensagem); // erro - mensagem is not defined (escopo local)

// Exercicio 2
function dados(callback) {
    callback('Processo concluido!');
}
dados(console.log);

async function buscarUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ nome: 'Gustavo', id: 6}), 1000);
    });
}

buscarUser().then(console.log);