const verdadeira = true;

//let tem escopo de bloco { ...bloco }
//var só tem escopo de função
let nome = 'Erick' //criando
var nome2 = 'Yago' //criando

if(verdadeira){
    let nome = 'Matteo' // criando
    var nome2 = 'Bianca' //redeclarando

    if (verdadeira){
        var nome2 = 'Olívia' //redeclarando
        let nome = 'Milena'
    }
}

console.log(nome,nome2)

function falaOi(){

    if(verdadeira){
        let nome = 'Sarah'
        var sobrenome = 'Loyola'
    }

    console.log(sobrenome) //o var funciona fora do bloco, o let não
}

falaOi()