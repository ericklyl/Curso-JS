const alunos = ['Erick', 'Yago', 'Wanderly']

//mostra lista de alunos
console.log(alunos) 

//mostra lista de alunos no indice
console.log(alunos[1]) 

//mostra tamanho da lista
console.log(alunos.length)

//altera elemento da lista
alunos[0] = 'Marcia' 

//cria novo elemento da lista em determinado indice
alunos[3] = 'Erick'
console.log(alunos)

//adiciona elemento ao fim da lista
alunos.push('Gabigol')
console.log(alunos)

//adiciona ao inicio da lista
alunos.unshift('Pedro')
alunos.unshift('Ana') // vem em primeiro e o anterio vai pra segundo
console.log(alunos)

//remove do fim
let removido = alunos.pop()

// remove no inicio
let removidoInicio = alunos.pop()

//remove no indice, a posicao fica vazia
delete alunos[1]

console.log(removido)
console.log(alunos)

// mostra os elemento delimitados
console.log(alunos.slice(0,2)) //mostra os 3 primeiro itens
console.log(alunos.slice(0,-2)) //mostra os itens de tras pra frente

console.log(typeof alunos) //mostra que é object
console.log(alunos instanceof Array) // confirma de forma boleana se é array

