//Criando objetos manualmente
const pessoa1 = {
    nome: 'Erick',
    sobrenome: 'Loyola',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando OI...`)
    },

    IncrementaIdade() {
        this.idade++
    }
}

console.log(pessoa1.nome)

//Função que cria objetos
function criaObjeto(nomeNovo, sobrenomeNovo, idadeNova){
    return{
        nomeNovo,
        sobrenomeNovo,
        idadeNova
    }
}


const pessoa2 = criaObjeto('Yago', 'Gama', 23)
const pessoa3 = criaObjeto('Wanderly', 'Nascimento', 23)
const pessoa4 = criaObjeto('Marcia', 'Pestana', 23)

pessoa1.fala();
pessoa1.IncrementaIdade();
console.log(pessoa2.nomeNovo)
console.log(pessoa3.nomeNovo)
console.log(pessoa4.nomeNovo)