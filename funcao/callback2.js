const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// Sem Callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
//a função filter vai gravar os dados do array somente quando a condição da função nota for valida.
//O restante dos dados do array não será gravado. O callback no caso é a nota ser menor que 7
notasBaixas = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas)

// Com callback usando Arrow
notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)