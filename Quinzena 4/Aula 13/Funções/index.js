console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")
/* Exercício de Interpretação 

1 - 
    1.1 - Serão impressos os valores 10 e 50.
    1.2 - Seriam executadas, porém não seriam impressas na tela do console

2 -
    2.1 Darvas e Goli
    2.2 Amanda e Caio

3 - Recebe um array de entrada e verifica quais valores são pares
    e caso encontre adiciona os pares ao quadrado em um novo array (arrayFinal)
    nome sugerido: pares_ao_quadrado()
*/

// Execução 

// 4 -
function sobre() {
    console.log("Me chamo Felipe, tenho 22 anos, moro em Alagoas e sou estudante.")
}

function sobre(nome, idade, cidade, ehEstudante) {
    let mensagemSeEstudante = ""
    if (ehEstudante) {
        mensagemSeEstudante = "sou"
    } else {
        mensagemSeEstudante = "não sou"
    }

    console.log(`Me chamo ${nome}, tenho ${idade} anos, moro em ${cidade} e ${mensagemSeEstudante} estudante.`)
}

// 5.1 -
let soma = function(a, b) {
    return a + b
}

console.log(soma(1, 2))

//5.2 -
let maior = function(a, b) {
    if (a >= b) {
        return true
    } else {
        return false
    }
}

console.log(maior(13, 6))

//5.3
function loop (mensagem) {
    for (let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
}

//6.1 - 
let tamanhoArray = (array) => {
    return array.length
}

//6.2
let arrayPar = (numero) => {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

//6.3 -
let pares = (array) => {
    let contador = 0
    for (numero of array) {
        if (numero % 2 === 0) {
            contador += 1
        }
    }

    return contador
}

//6.4 -
let pares = (array) => {
    let contador = 0
    for (numero of array) {
        if (arrayPar(numero)) {
            contador += 1
        }
    }

    return contador
}
