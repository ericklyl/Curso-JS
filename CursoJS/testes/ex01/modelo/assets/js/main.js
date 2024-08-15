// Primeira coisa é parar o evento de submit do formulario

//COM O '#' eu obtenho o id
//capturando evento de submit
const form = document.querySelector('#formulario')

//fazendo com que o formulario nao seja enviado e a pagina recarregada:
//1° EU PASSO QUAL EVENTO EU QUERO ESCUTAR, NO CASO O DE 'SUBMIT'
//O 'EVENTO' PASSADO É O SUBMIT, 
form.addEventListener('submit', function(evento) { 
    evento.preventDefault(); //nao deixa ser enviado
    
    //agora iremos pegar o input do peso e altura
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')

    //agora iremos pegar o valor (numero) do peso e altura
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){ //caso nao seja verdadeiro, Nan (não numerico) é falso, da peso invalido
        setResultado('Peso invalido!', false)
        return
    }

    if(!altura){
        setResultado('Altura invalido', false)
        return
    }

    const imc = getIMC(peso, altura) //atribui o resultado dafunção a variavel
    const NivelIMC = getNivelIMC(imc) //atribui o resultado dafunção a variavel

    const msg = `Seu IMC é ${imc} (${NivelIMC}).` // cria mensagem 

    setResultado(msg,true) //mostra mensagem
})

function getNivelIMC (imc){ 
    //cria uma array com os niveis
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    //pode fazer assim quando o bloco de codigo é pequeno    
    if (imc >= 39.9) return nivel[5] //apartir do peso returna o nivel 
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
    

    }

    function getIMC(peso,altura){
        //calcula o imc com base no peso e altura
        const imc = peso/altura**2
        return imc.toFixed(2)

    }

//const pesoTela = formulario.querySelector('#peso')
//resultado.innerHTML = pesoTela

function criaP(){
    const p = document.createElement('p')
    return p
}

//função que adiciona a resultado, ele exibe o que esta em 'msg'
function setResultado(msg, isValid){ //exibe o msg que foi utilizada na ultima função
    const resultado = document.querySelector('#resultado') //cria uma variavel de resultado
    resultado.innerHTML = '' //mostra na tela a msg

    

    const p = criaP() //cria paragrafo

    if (isValid){
        //caso seja true o valor, fica verde
         p.classList.add('paragrafo-resultado')
    }else{
        //caso seja falso fica vermelho
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)    
}


//const peso = form.querySelector('.peso')
//const altura = form.querySelector('.altura')