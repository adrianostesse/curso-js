let num = [5, 3, 6, 8, 2]
num.sort()
console.log(num)
console.log (`Nosso vetor tem ${num.length} posições`)
console.log(`o primeiro valor da array é ${num[0]}`)

let pos = num.indexOf(1)
if(pos == -1) {
    console.log('O valor não foi encontrado')
}else {
    console.log(`o valor 8 está na posição ${pos}`)
}
