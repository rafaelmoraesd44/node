//Variavel var so tem 2 escopo. 
//Global - toda variavel var declarada de fora de uma função é a mesma variavel
//Função - Variavel var criada dentro de uma função tem um valor unico so lido na propria função
var numero = 1
{
    var numero = 2
    console.log('dentro=',numero)
}

console.log('fora=',numero)

