// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' //Prototype é o nivel mais alto da hierarquia. Não é recomendado fazer isso
const avo = { attr1: 'A'} //Avó vai herdar o prototype
const pai = {__proto__: avo, attr2: 'B'} //pai herda do avó
const filho = {__proto__: pai, attr3: 'C'} //filho herda do pai

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += this.velMax
        } else {
            this.velAtual = this.velMax
        }      
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (sombreamento, subistitui o valor do atributo herdado)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super faz com que o metodo do prototypo seja invocado ao inves do metodo atual
    }
}


Object.setPrototypeOf(ferrari,carro) //Fazendo a herança de carro para ferrari
Object.setPrototypeOf(volvo,carro) //Fazendo a herança de carro para volvo


//Por padrão ao imprimir os objetos so vão ser listados os atributos declarados no objeto
//Os atributos herdados naõ são trazidos, mais podem ser acessados normalmente
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())