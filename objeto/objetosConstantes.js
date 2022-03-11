const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa) //freeze congela os valores do objeto, não permitindo alteração
pessoa.nome = 'Maria' //O valor não será colocado, será mantido o anterior
pessoa.end = 'Rua ABC' //Não irá funcionar
delete pessoa.nome //Também não irá funcionar
console.log(pessoa).nome