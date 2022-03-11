const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!" //Concatenação normal geralmente utilizada

//Concatenar com quebra de linha
const template = ` 
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

//Função Arrow
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)