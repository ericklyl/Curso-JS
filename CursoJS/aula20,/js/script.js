function meuEscopo(){
    const form = document.querySelector('form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        //const resultado = pessoa(nome,sobrenome,peso,altura)
        //pessoas.push(pessoa(nome,sobrenome,peso,altura))
        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
         `${peso.value} ${altura.value}</p>` //edita o documento html mostrando na pagina por meio do js usando a classe 'resultado' que estava definida no html

    }

    form.addEventListener('submit', recebeEventoForm)

}
meuEscopo()