let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1   //essa forma de escrever tem precedencia sobre a forma num1--
console.log(num1)

console.log(++num1 === num2--) //Neste exemplo o ++num1 tem prioridade na execução do num2--