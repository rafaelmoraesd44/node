//map serve pra mapear os elementos do array para outro com os dados diferentes. 
//O tamanho do array deve ser o mesmo

const nums = [1,2,3,4,5]

//map é um como se fosse um for alterando os elementos
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

//Map sempre precisa de um return, no caso da Arrow o return é implicito
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)