//criando um objeto pessoa
const pessoa = {
    nome: 'Erick',
    sobrenome: 'Loyola',
    idade: '20',
    endereco: {
        rua: 'Rua Pedro Lima',
        numero: 50
    }
}

// ATRIBUIÇÃO VIA DESETRUTURAÇÃO
//como 'sobrenome' tem o mesmo nome do atributos ela ja recebe o valor
//o atributo nome do objeto pessoa é dado a variavel 'n'
const { nome: n = '', sobrenome,...resto} = pessoa
console.log(n,sobrenome, resto)

//atribui rua a 'r' e caso não tenha nenhum elemento adota 123
const {endereco: {rua: r = '123', numero}, endereco} = pessoa
console.log(r, numero, endereco)