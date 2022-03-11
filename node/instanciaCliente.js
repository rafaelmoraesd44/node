const contadorA = require = ('./instanciaUnica')
const contadorB = require = ('./instanciaUnica')

//Invocando a função factory
const contadorC = require = ('./instanciaNova')
const contadorD = require = ('./instanciaNova')


contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //Aqui o valor do B vai ser 3, pois o node faz cache da mesma instancia para um objeto criado

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) //Arqui o valor será 1 pois usando uma função factory a instancia de cada objeto é feita separadamente