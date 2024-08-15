
const numeros = [1000, 2000, 3000 ,4000,5000,6000,7000,8000,9000]
const [um,dois, tres, ...resto] = numeros
console.log(um,dois,tres) //mostra os tres q selecionei
console.log(resto) //mostra o resto do numeros

const [uno, ,tre, , cinco] = numeros
console.log(uno,tre,cinco)

//Lista composta:

//                0          1          2
//             0  1  2    3  4  5    6  7  8
const nmr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = nmr
console.log(lista3[2])
console.log(nmr[1][2])