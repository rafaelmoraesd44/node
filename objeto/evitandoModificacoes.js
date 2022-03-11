//Object.preventExtensions - Não deixar criar novos objetos, mais deletar é permitido
const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99,
    tab: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - Deixa modificar atributos mais não deixa apagar e criar novos
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes