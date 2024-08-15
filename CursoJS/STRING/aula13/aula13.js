// Strings são indexadaveis, então tem indices, começa com 0
let time = 'Flamengo'
let time2 = 'Vasco'

console.log(time)
console.log(time[0]) //ver elemento
console.log(time.charAt(1)) //ver elemento

// Pra concatenar string
console.log(time.concat(time2))

//ver em que posição começa a palavra 'mengo' na string
console.log(time.indexOf('mengo')) 

//ver em que posição começa a palavra 'mengo' na string começando pela posição 1
console.log(time.indexOf('mengo',1)) 

//ver em que posição começa a palavra 'mengo' na string, de tras pra frente
console.log(time.lastIndexOf('mengo')) 

//substitui 'mengo' por 'pixaba'
console.log(time.replace('mengo','pixaba'))

// ve o tamanho da string:
console.log(time.length)

// começa a string a partir dessa posição e vai até a posição dita
console.log(time.slice(2,5))
console.log(time.slice(-1)) // de tras pra frente

// separa a string com base no caracte passado
console.log(time.split('a'))

console.log(time.toUpperCase()) // deixa tudo em maiusculo
console.log(time.toLowerCase()) //deixa tudo em minusculo
