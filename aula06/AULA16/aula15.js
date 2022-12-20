


let num = [5,4,2,8, 10, 11]
num.sort()
num.push(9) //metodo 
num.length // atributo
console.log(num)
let tes = num.indexOf(8)
if (tes == -1){
    console.log('o valor não foi encontrado')
}else {
    console.log(` o valor esta na posição ${tes}`)
}
for (var pos in num) {
    console.log(` A posição ${pos} tem o valor  ${num[pos]}`) 
}
