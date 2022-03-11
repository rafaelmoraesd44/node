const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Adicionar novos elementos no array
console.log(valores)

console.log(valores.pop()) //retira o ultimo elemento do array (apaga)

delete valores[0]  //apaga o conteúdo da posição
console.log(valores)

console.log(typeof valores) //tipo do array é object