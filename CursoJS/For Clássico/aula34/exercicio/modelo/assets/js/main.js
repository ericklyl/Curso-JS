//aqui é criado um array de elementos, cada objeto tem duas propriedades 'tag' e 'texto'


const elementos = [
    {tag: 'p', texto: 'Qualquer texto que voce quiser.'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'section', texto: 'Frase3'},
    {tag: 'footer', texto: 'Frase4'}
]

//selecionando o container
const container = document.querySelector('.container') 

//cria um elemento e div e atribuia variavel div
const div = document.createElement('div')

//faz um loop que percorre cada objeto
for (let i = 0; i < elementos.length; i++){
    let {tag,texto} = elementos[i] //cria variaveis e atribui os elemento do objeto a elas
    let tagCriada = document.createElement(tag) //cria um elemento html
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)