//variavel let tem seu valor proprio dentro do escopo

let numero = 1
{
    let numero = 2
    console.log('dentro =',numero)
}

console.log('fora = ',numero)