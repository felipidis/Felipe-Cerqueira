/* Exercícios de interpretação de código 

1 - a = 10
    b = 10
    console.log(b) -> irá imprimir b como 10.

    b = 5 
    console.log(b) -> irá imprimir b como 5.


2 - a = 10
    b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c) -> irá imprimir 10 10 10.

/* Exercício de escrita */

// 1 - 
let nome
let idade
console.log(typeof nome)
console.log(typeof idade) /* foram apresentados como undefined, pois não foram atribuidos valores*/
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
console.log("Olá", nome, "você tem", idade, "anos")

// 2 -

let resposta = prompt("Qual sua série favorita?")
console.log("Resposta:", resposta)
let resposta2 = prompt("Onde você mora?")
console.log("Resposta:", resposta2)
let resposta3 = prompt("Qual seu personagem favorito?")
console.log("Resposta:", resposta3)
let resposta4 = prompt("Quem é seu melhor amigo?")
console.log("Resposta:", resposta4)
let resposta5 = prompt("Qual seu maior medo?")
console.log("Resposta:", resposta5)

// 3 - 
let comidas = ["Pizza", "Lasanha", "Macarrão com Queijo", "Risole", "Passaporte"]
console.log("Essas são minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
comidas[1] = prompt("Qual sua comida favorita?")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// 4 - 
let perguntas = ["Você gosta de sorvete?", "Sua casa é pequena?", "Você tem irmãos?"]
let respostas = [true, false, true]
console.log(perguntas[0],respostas[0])
console.log(perguntas[1],respostas[1])
console.log(perguntas[2],respostas[2])
