let valor //não atribui valor, não foi inicializada
console.log(valor) //Não da erro, mais valor ficar undefined
//console.log(valor2) //Aqui irá dar um erro de valor2 is not defined

valor = null //ausência de valor. Quando é atribuido o endereço de memória é zerado
             //sempre usar nulo quando quiser zerar uma variável
console.log(valor)
//console.log(valor.toString()) //Erro porque a variavel não possui valor na memoria

const produto = {}
console.log(produto.preco) //Neste caso irá ser possivel acessar mais irá retornar Undefined

console.log(produto)

produto.preco = 3.50
console.log(produto)


produto.preco = undefined // evite atribuir de forma explicita undefined
console.log(produto.preco)
console.log(produto)

produto.preco = null //melhor forma de retirar o valor de um atributo
console.log(produto.preco)