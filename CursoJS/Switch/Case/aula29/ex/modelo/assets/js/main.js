
//atribuimos ao h1, assim quando chamarmos o h1 no html, iremos chama ele
const h1 = document.querySelector('.container h1') 



const dataHoje = new Date() //cria data
const diaSemana = dataHoje.getDay() //pega em numero o dia da semana
const MesAtual = dataHoje.getMonth() //pega em numero o mes

//função que retorna o dia da semana por escrito
function DiaDaSemana(diaSemana){
    let DiaDaSemanaTexto

    switch(diaSemana){
        case 0: 
            DiaDaSemanaTexto = 'Domingo'
            return DiaDaSemanaTexto
        case 1:
            DiaDaSemanaTexto = 'Segunda-Feira'
            return DiaDaSemanaTexto
        case 2:
            DiaDaSemanaTexto = 'Terça-Feira'
            return DiaDaSemanaTexto
        case 3:
            DiaDaSemanaTexto = 'Quarta-Feira'
            return DiaDaSemanaTexto
        case 4:
            DiaSemanaTexto = 'Quinta-Feira'
            return DiaDaSemanaTexto
        case 5:
            DiaDaSemanaTexto = 'Sexta-Feira'
            return DiaDaSemanaTexto
        case 6:
            DiaDaSemanaTexto = 'Sabado'
            return DiaDaSemanaTexto
    }  
}
function formataMes(MesAtual){
    let MesEscrito

    switch(MesAtual){
        case 0:
            MesEscrito = 'Janeiro'
            return MesEscrito
        case 1:
            MesEscrito = 'Fevereiro'
            return MesEscrito
        case 2:
            MesEscrito = 'Março'
            return MesEscrito
        case 3:
            MesEscrito = 'Abril'
            return MesEscrito
        case 4: 
            MesEscrito = 'Maio'
            return MesEscrito
        
        case 5:
            MesEscrito = 'Junho'
            return MesEscrito
        case 6: 
            MesEscrito = 'Julho'
            return MesEscrito
        case 7:
            MesEscrito = 'Agosto'
            return MesEscrito
        case 8:
            MesEscrito = 'Setembro'
            return MesEscrito
        case 9:
            MesEscrito = 'Outubro'
            return MesEscrito
        case 10:
            MesEscrito = 'Novembro'
            return MesEscrito
        case 11:
            MesEscrito = 'Dezembro'
            return MesEscrito  
    }
}

function formataData(dataHoje){
    const dia = dataHoje.getDay()
    const diaDoMes = dataHoje.getDate() // dia atual do mes
    const mes = dataHoje.getMonth()
    const ano = dataHoje.getFullYear()

    const hora = dataHoje.getHours()
    const minutos = dataHoje.getMinutes()

    let DiaHoje = DiaDaSemana(dia)
    let MesAtual = formataMes(mes)

    return `${DiaHoje}, ${diaDoMes} de ${MesAtual} de ${ano} ${hora}:${minutos}`

}

const msgs = formataData(dataHoje)
h1.innerHTML = msgs


//Teste para escrever no html:
//aonde tive h2 no html, ira escrever oq esta escrito em h2 aq
const h2 = document.querySelector('.container h2')
//const gabriel = 'Gabigol aos 91'
h2.innerHTML = 'Gabigol aos 91'


//Forma curta de fazer o mesmo exercicio:
const h3 = document.querySelector('.container h3')
//const dataH3 = new Date()
h3.innerHTML = dataHoje.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})

//outro metodo:
function getNomeMes(dataHoje){
    const m = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return meses[dataHoje.getMonth()]

}
//pra pegar dia da semana
function getDiaDaSemana(dataHoje){
    const d = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
    return d[dataHoje.getDay()]
}
