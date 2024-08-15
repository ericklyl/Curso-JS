let num1 = 10
let num2 = 100.50

//transforma numero em string 
num1 = num1.toString() 

//transforma numero em string em sua versão binaria 
num1 = num1.toString(2)

// fica so com duas casas decimais
num2 = num2.toFixed(2)

// verifica se é numero inteiro, retornando true ou false
console.log(Number.isInteger(num1))

let temp = num2 * '5'

// mostra se não é numérico
console.log(Number.isNaN(temp))