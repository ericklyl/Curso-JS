// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 1000
const nivelUSuario = pontuacaoUSuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'
console.log(nivelUSuario)

const corUsuario = 'Pink'
const corPadrao = corUsuario || 'Preta'

console.log(nivelUSuario,corPadrao)