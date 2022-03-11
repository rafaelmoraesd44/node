
//fora do contexto do loop o var também é lido, pois é uma variável global
for(var i =0; i<10;i++){
    console.log(i)
}

console.log('i = ',i)