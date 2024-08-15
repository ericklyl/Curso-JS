//capturando evento de submit
const form = document.querySelector('#formulario')

//fazendo com que o formulario nao seja enviado e a pagina recarregada:
form.addEventListener('submit', function(evento) { 
    evento.preventDefault(); //nao deixa recarregar
    console.log('Evento previnido') //mostra no console
    setResultado('Olá mundo!')// é a msg passada na proxima função
})

function criaP(){
    const p = document.createElement('p')
    return p
}

//função que adiciona a resultado, ele exibe o que esta em 'msg'
function setResultado(msg){ //exibe o msg que foi utilizada na ultima função
    const resultado = document.querySelector('#resultado') //cria uma variavel de resultado
    resultado.innerHTML = msg //mostra na tela a msg

    resultado.appendChild(p)
}


const peso = form.querySelector('.peso')
const altura = form.querySelector('.altura')