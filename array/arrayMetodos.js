const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona elemento no final do array
console.log(pilotos)

pilotos.shift() //remove elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona elemento no inicio do Array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionou 2 elementos a parter da segunda posição
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //Removeu 1 elemento da terceira posição
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //copia o array pilotos para algunsPIlotos a partir da posição 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //Copia o array do indice 1 ao 3. O indice 4 não entra
console.log(algunsPilotos2)