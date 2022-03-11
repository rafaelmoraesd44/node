function soma() {
    let soma = 0
    for (i in arguments) { //aruments é um array interna de uma função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,'TESTE'))
console.log(soma('a','b','c'))