let vagas = [8, 3, 5, 9, 7]
for (let pos in vagas) {
    console.log(`A posição ${pos} esta preenchida com ${vagas[pos]}.`)
}
console.log('Após ordernado.')
vagas.sort()
for (let pos in vagas) {
    console.log(`A posição ${pos} esta preenchida com ${vagas[pos]}.`)
}
for (let num = 0; num <= 10; num++) {
    console.log(`Gostaria de saber qual a posição do numero ${num}.`)
    pos = vagas.indexOf(num)
    if (pos == -1) {
        console.log(`O numero ${num} não esta preenchido na lista.`)
    } else {
        console.log(`O numero ${num} esta preenchido na posição ${pos}.`)
    }
}