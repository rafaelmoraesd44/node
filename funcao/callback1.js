const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// o evento do callback neste caso é cada elemento encontrado no array
fabricantes.forEach(imprimir) //o forEache vai percorrer o array e para cada registro que ele encontrar ele vai chamar a função imprimir passando os parâmetros
fabricantes.forEach(function (fabricante) { //percorrer cada elemento e imprimir o valor do objeto
    console.log(fabricante)
})

fabricantes.forEach(function (fabricante,index) { //percorrer cada elemento e imprimir o indice do objeto
    console.log(index)
})