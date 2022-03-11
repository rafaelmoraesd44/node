console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' //alterar elementos no array. Add quando não existe
aprovados.push('Abia')       //add elementos no array

console.log(aprovados.length)

aprovados[9] = 'Rafael' //Os elementos entre o indice 4 a 9 vão ficar undefined
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()  //ordena os valores do array
console.log(aprovados)

delete aprovados[1] //excluir a posição 1 do array. A posição excluída fica com undefined
console.log(aprovados[1])

aprovados = ['Bia','Carlos','Ana']
//Defini na primeira posição a partir de qual elemento sera excluido, e na segunda quantos elementos serão excluidos
aprovados.splice(1,1) 
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
//A terceira e a quarta posição mostram quais elementos serão adicionados após exclusão
aprovados.splice(1,2,'Elemento1','Elemento2') 
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
//Não sera excludio nenhum elemento e sera adicionado Elemento 1 e 2 após a primeira posição
aprovados.splice(1,0,'Elemento1','Elemento2') 
console.log(aprovados)