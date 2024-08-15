function getDiaSemanaTexto (diaSemana){
    let DiaSemanaTexto;

    switch (diaSemana) {
    case 0: 
        DiaSemanaTexto = 'Domingo'
        return DiaSemanaTexto
    case 1:
        DiaSemanaTexto = 'Segunda'
        return DiaSemanaTexto
    case 2: 
        DiaSemanaTexto = 'Terça'
        return DiaSemanaTexto
    case 3:
        DiaSemanaTexto = 'Quarta'
        return DiaSemanaTexto
    case 4:
        DiaSemanaTexto = 'Quinta'
        return DiaSemanaTexto
    case 5:
        DiaSemanaTexto = 'Sexta'
        return DiaSemanaTexto
    case 6:
        DiaSemanaTexto = 'Sabado'
        return DiaSemanaTexto
    }
}

const data = new Date('2003-08-03 00:00:00')
const diaSemana = data.getDay()
const DiaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemana, DiaSemanaTexto)