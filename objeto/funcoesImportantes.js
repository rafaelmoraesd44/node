const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pegar todas as chaves do objeto
console.log(Object.values(pessoa)) //pegar todas os valores do objeto
console.log(Object.entries(pessoa)) //retorna array com chaves e registros

Object.entries(pessoa).forEach(e => { //ForEach percorrendo array dos objetos
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { //Outro exemplo de forEach percorrendo array dos objetos
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{ //Defini uma propiedade com mais opções
    enumerable: true, //pode ser listada no object.keys
    writable: false, //pode ser modificada
    value: '01/01/2019' //valor padrão
})

console.dataNascimento = '01/01/2017' //tentando alterar, mais a definição da propriedade não aceita
console.log(pessoa.dataNascimento)

//Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//Object.assign vai jogar todos objetos do o1 e o2 dentro do objeto dest
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj) //Impede que o objeto seja alterado
obj.c = 1234
console.log(obj)