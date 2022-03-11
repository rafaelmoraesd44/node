console.log(this === global)
console.log(this === module)

console.log(this === module.exports) // de fora da função o this aponta para module.exports/exports
console.log(this === exports)

function logThis() { //Dentro de uma função o This não aponta para exports/module.exports, mais fora aponta
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)    
    console.log(this === global) //dentro da função o this aponta para global
}

logThis()