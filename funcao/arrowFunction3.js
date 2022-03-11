//dentro do contexto do NODE, o this dentro de uma função é reconhecido como contexto global.
//No navegador o this dentro de uma função não reconhece mais ser do contexto windows

let comparaComThis = function (param) {
    console.log (this ===param)
}

comparaComThis(global)
comparaComThis(this) //Esse this naõ é o mesmo this de dentro da função chamada

const obj = {}
comparaComThis = comparaComThis.bind(obj) // bind mudou o contexto pro contexto do obj
comparaComThis(global)
comparaComThis(obj)

//Uma função normal o this é o mesmo do global, numa Arrow o this é o mesmo do modulo
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//Neste exemplo mudamos o contexto do this da função arrowFunction
//O this de uma Arrow não é mudado nem com bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)