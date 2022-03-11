function criarProduto(nome,preco){ 
    //Quando os parametros do objeto retornado possuem o mesmo nome que os parametros da função não precisa colocar nome: nome
    return {
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('Roupa',100))
console.log(criarProduto('Carro',20000))
console.log(criarProduto('Computador',4500))