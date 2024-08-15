
function saudacao(nome){
    console.log(`Olá ${nome}`)
}

function soma(x = 1, y = 2){
    const resultado = x + y
    return resultado
}
resposta = soma(5,10)

console.log(resposta)

const variavel = saudacao('Erick')
saudacao('Yago')