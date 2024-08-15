const numero = 0;

// se (numero >= 0 && numero <= 5), ocorrer faça isso {codigo}
//se não, faça isso {codigo}

if(numero <= 10) {
    console.log('O numero é menor ou igual a 10')
}

if (numero >= 0 && numero <= 5){
    console.log('O numero é maior ou igual a 0 e menor ou igual a 5.')
} else if (numero >= 6 && numero <= 8){
    console.log('O numero é maior ou a 6 e menor ou igual a 8')
}else if (numero >= 9 && numero <= 11){
    console.log('O numero é maior ou igual 9 e menor ou igual a 11')
}else {
    console.log('O numero não esta entre 0 e 11')
}