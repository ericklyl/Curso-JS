let num1 = prompt('Qual o numero? ')
const numerotitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numerotitulo.innerHTML = num1

num1 = Number(num1)
//document.body.innerHTML +=(`Seu Numero é ${num1} <br />`)

texto.innerHTML = ('')

let raiz = num1 ** 0.5
texto.innerHTML += (`Raiz quadrada ${raiz}<br />`)

let inteiro = Number.isInteger(num1)
texto.innerHTML += (`${num1} é inteiro: ${inteiro}<br />`)

let numerico = Number.isNaN(num1)
//numerico = toString(numerico)
texto.innerHTML += (`É NaN: ${numerico}<br />`)

let praCima = Math.floor(num1)
let praBaixo = Math.ceil(num1)
texto.innerHTML += (`Arredondando pra baixo: ${praBaixo}<br />`)
texto.innerHTML += (`Arredondando pra cima: ${praCima}<br />`)


num1 = num1.toFixed(2)
texto.innerHTML += (`Com duas casas decimais: ${num1}<br />`)