function Pessoa() {
    this.idade = 0


    setInterval(() => { //Função Arrow dentro do setInverval usa o this o contexto da function Pessoa
        this.idade++
        console.log(this.idade)
    },1000) 
}

new Pessoa