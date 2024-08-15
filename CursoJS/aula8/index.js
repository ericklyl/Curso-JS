const nome = 'Erick'
const sobrenome = 'Loyola'
const peso = 69
const idade = 21
const altura = 1.80
let imc //peso / (altura * altura)
let anoNascimento = 2024 - idade;

imc = peso / (altura * altura)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura}, e seu IMC é de ${imc}`)
console.log(nome, 'nasceu em', anoNascimento)