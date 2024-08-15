/*
Operadores de comparação
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (checar valor)
=== igualdade estrita (checa valor e tipo)
!= diferente (checa valor)
!== diferente estrito (checa valor e tipo)
*/

const n1 = 10
const n2 = '10'
const comp = n1 === n2 //como são de tipos diferentes, retorna falso
console.log(comp)

const n3 = 10
const n4 = '10'
const compa = n1 !== n2 //retorna true pois os tipos são diferentes
console.log(compa)
