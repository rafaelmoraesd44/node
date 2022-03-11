const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if(x == 5) break //Break vai interromper o laço em cima do for, while ou switch
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y== 5) continue //Continue vai pular para o proximo registro do loop
    console.log(`${y} = ${nums[y]}`)

}

externo: for (a in nums) { //a palavra externo é um rotulo que pode ser colocado pra você escolher aonde o break ou o continue irá agir. Se é no primeiro for ou no segundo
    for (b in nums){
        if (a ==2 && b==3) break externo
        console.log(`Par = ${a},${b}`)
    }
}