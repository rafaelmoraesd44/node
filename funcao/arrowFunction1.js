let dobro = function (a) { //função normal
    return 2 * a
}

dobro = (a) => { //Arrow Function
    return 2 * a
}

dobro = a => 2 * a //Arrow function sem parênteses e o return é uma unica linha
console.log(dobro(Math.PI))

ola = () => 'Olá' // função sem parâmetro
ola = _ => 'Olá' // função com 1 parâmetro válido

