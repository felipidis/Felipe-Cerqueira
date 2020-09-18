console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")
/* Interpretação 
1-
    a. False
    b. False
    c. True
    e. boolean

2-
    a. undefined
    b. null
    c. 11
    d. 3
    e.[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9
*/

// Escrita 
// 1-
let idade1 = Number(prompt("Qual a sua idade?"))
let idade2 = Number(prompt("Qual a idade do seu melhor amigo(a)?"))
console.log("Sua idade é maior do que a do seu melhor amigo?", idade1 > idade2 )
console.log(idade1 - idade2)

// 2-
let num = Number(prompt("Insira um número ímpar"))
console.log(num%2)
// Sim. Todo resto de divisão de um número par por dois é 0.
// Todo resto de divisão de um número ímpar por dois é 1.  

// 3-
let listaDeTarefas = [];
listaDeTarefas.push(prompt("Qual tarefa você irá realizar?"))
listaDeTarefas.push(prompt("Qual tarefa você irá realizar?"))
listaDeTarefas.push(prompt("Qual tarefa você irá realizar?"))
console.log(listaDeTarefas)
let escolha = Number(prompt("Qual tarefa você realizou?"))
listaDeTarefas.splice(escolha, 1)
console.log(listaDeTarefas)

// 4-
let user = prompt("Qual o seu nome?")
let email = prompt("Qual o seu email?")
console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + user)

// Desafios
// 1-
console.log((77 - 32)*5/9 + 273.15) 
console.log((80)*9/5 + 32)
console.log((30 - 32)*5/9 + 273.15) 
console.log((30)*9/5 + 32)
let celsius = Number(prompt("Escolha um valor em Celsius"))
console.log((celsius - 32)*5/9 + 273.15) 
console.log((celsius)*9/5 + 32)

// 2-
console.log(280*0.05)
console.log((280*0.05) - (280*0.05)*0.15)

// 3-
console.log("20lb equivalem a", 20*0.453592 , "kg")
console.log("10.5oz equivalem a", 10.5*0.0283495, "kg")
console.log("100mi equivalem a", 100*1609.34, "m")
console.log("50ft equivalem a", 50*0.3048, "m")
console.log("103.56gal equivalem a", 103.56*3.78541, "l")
console.log("50xic equivalem a", 450*0.24, "l")

let libras = Number(prompt("Quantas libras quer converter?"))
console.log(libras,"lb equivalem a", libras*0.453592 , " kg")