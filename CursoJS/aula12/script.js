let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

console.log(varA,varB,varC)

varA2 = varA  //Criada uma variavel temporaria pra armazenar o valor de A

varA = varB
varB = varC
varC = varA2

console.log(varA,varB,varC)

varB = varC
