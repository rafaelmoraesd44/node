// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //resultdo NaN
imprimirSoma(2,3,4,5,6,7,8,9) //Resultado normal, os outros parametros serão ignorados
imprimirSoma()  //resultado NaN

//Função sem reotrno
function soma(a, b = 0) { //Definir valor padrão na função
    return a + b
}

console.log(soma(3,2)) //Resultado normal
console.log(soma(3,2)) //Resultado normal, pois o segundo parametro tem valor padrão na função