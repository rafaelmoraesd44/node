const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna o quinto caractere da string
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //pegar valor da tabela AscII da quarta posição da string
console.log(escola.indexOf("d")) // buscar a posição da string
console.log(escola.substring(1)) // Copiar a string da posição 1 até o final
console.log(escola.substring(0,3)) // Copiar a string da posição 0 até a 3
console.log("Escola ".concat(escola).concat("!")) //Concatenar strings
console.log(escola.replace(3, 'e')) //Substitua a terceira posição pela letra e

console.log("Ana,Maria,Pedro".split(",")) //quebrar string via delimitador. Transforma string em array

