const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'F40',
    velMax: 324
}

console.log(ferrari.__proto__) //quando usa __proto__ acessa o objeto pai da ferrari

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

