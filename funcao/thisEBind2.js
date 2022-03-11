function Pessoa() {
    this.idade = 0

    const self = this //usando essa constante o JS vai driblar o problema do this estar em outro contexto na função abaixo
    setInterval(function() { //setInterval é uma função que programa a execução de outras funções passadas com intervalos
        self.idade++
        console.log(self.idade)
    },1000) //intervalo de execução
}

new Pessoa