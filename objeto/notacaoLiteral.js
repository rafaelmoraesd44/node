//Criação de objeto
const a = 1
const b = 2
const c = 3
const obj1 = {a, b, c}
console.log(obj1)

//Criação de objeto
const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//Criação de objeto
const obj4 = {
    funcao1: function() { //Forma antiga
        //...
    },
    funcao2() {           //forma nova
        //...
    }
}
console.log(obj4)