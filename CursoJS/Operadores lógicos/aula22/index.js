/*
Operadores Lógicos:
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true //todos tem que ser verdadeiro pra ser true
const expressaoOr =  true || false //se qualquer uma for verdadeira, retorna true
//const expressaoNot = false ! false 
console.log(expressaoAnd)
console.log(expressaoOr)


//Exemplo: logar usuario de acordo com base de dados
const usuario = 'Erick' // form usuario digitou
const senha = '123456' // form usuario digitou

                        //True             //False
const vaiLogar = usuario === 'Erick' && senha === '12345'
console.log(vaiLogar)