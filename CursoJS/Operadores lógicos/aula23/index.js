/*
&& -> false && true -> false "o vslor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY (São avaliados como falso):
* false
0
'' "" `` - (STRING VAZIA)
null/undefined
NaN
*/

console.log('Erick' && 'Yago'); // os dois são true, retorna o ultimo true
console.log('Erick' && '' && 'Yago'); //retorna a string vazia, pois é falsa
console.log(0 || false || null || 'Erick Gama' || true) //ele retorna o 1° valor true
