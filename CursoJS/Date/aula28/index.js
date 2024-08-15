// uso 'New' pra usar uma função construtora
const dataZero = new Date(0) //01/01/1970 epoca unix

//a contangem é feita em milesimos de segundos
const umDia = 60 * 60 * 24 * 1000

const tresHoras = 60 * 60  * 3 *     1000
//               segundos  horas   milisegundos

const data = new Date() // data e hora atual
console.log(dataZero + umDia)
console.log(data)
console.log(data.toString()) //data e hora legivel

// o mes começa do zero, 0 = janeiro
// ano, mes, dia, hora, minuto, segundo, milissegundos
const dataNascimento = new Date(2003, 7, 5 , 15, 14, 27)
console.log(dataNascimento.toString())

//datastring:
const datastr = new Date('2003-08-05 20:20:59') 
console.log(datastr.toString())

console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1) // mes começa do 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) //0 - Domingo, 6 - Sábado
console.log(data.toString())

console.log(Date.now()) //Data atual em ms
const dataMS = new Date(1721700636691)

//Função que coloca um zero a esquerda
function zeroAEsquerda (num) {
    //se for maior ou igual a 10, retorna o numero
    //se for menor, adiciona um 0 a esquerda
    return num >= 10 ? num : `0${num}`
}

//função que formata data
function formataData(data) {
    const dias = zeroAEsquerda(data.getDate())
    const meses = zeroAEsquerda(data.getMonth())
    const anos = zeroAEsquerda(data.getFullYear())
    const horas = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const segundo = zeroAEsquerda(data.getSeconds())

    return `${dias}/${meses}/${anos}  ${horas}:${minutos}:${segundo}`
}

const dataAtual = new Date()
const dataBrasil = formataData(dataAtual)
console.log(dataBrasil)
