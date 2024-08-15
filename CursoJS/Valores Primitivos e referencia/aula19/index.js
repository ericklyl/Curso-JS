/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados, se se b = a, se eu alterar a depois, b contiua sendo o mesmo vaor pois é uma copia do momento que foi passado

Referencia (mutavel) - array, object, function - Passados por referencia
eles apontam pro mesmo local na memoria, então se b = a, se alterar qualquer um dos dois, o outro tambem vai ser alterado

*/

//primitivo
x = 2
y = x
console.log(x, y)
x = 5
console.log(x, y)

//Referencia
const a = {
    nome: 'Erick',
    Sobrenome: 'Loyola'
}
const b = a;

b.nome = 'Yago';
console.log(a);
console.log(b)