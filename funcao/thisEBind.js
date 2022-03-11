const pessoa = {
    saudacao : 'Bom dia"',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind é o metodo do objeto que o this deve funcionar
falarDePessoa()