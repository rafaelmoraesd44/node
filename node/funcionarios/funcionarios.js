const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' //URL da internet
const axios = require('axios')  //Axios é utilizado para requisições http

const genero = f => f.genero == 'F' 
const pais = f => f.pais == 'China'
const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data

    //Mulher chinesa com menor salário
    const func = funcionarios
        .filter(pais)
        .filter(genero)
        .reduce(menorSalario)

    console.log(func)        
})