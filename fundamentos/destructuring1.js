// novo recurso de ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // tire de dentro do objeto o atributo nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //tire as variaveis nome e idade e coloque nas variaveis n e i
console.log(n, i)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log( logradouro, numero, cep)