/* Interpretação 

1 - O valor 10 será impresso na tela.

2 - 2.1 Foram impressos 19, 21, 23, 25, 27, 30
    2.2 Sim. 
    for(let numeros of lista){
        console.log(numero)
    }
Desafio 1 - 
    0
    00
    000
    0000
*/

// Escrita

// 3 - 
let array_original = [1, 4, 8, 13, 15, 17, 29, 33, 450, 330, 210, 2080, 4500]
for(let numeros of array_original)
    console.log(numeros);
for(let numeros of array_original)
    console.log(numeros/10);
let array_copia = []
for(numeros of array_original)
    if(numeros % 2 === 0)
        array_copia.push(numeros)
for(numeros of array_copia)
    console.log(numeros);
let array_string = []
for(let i = 0; i < array_original.length; i++)
    array_string.push("O elemento do index " + i + " é: " + array_original[i])
console.log(array_string);
let maior = Number.MIN_VALUE, menor = Number.MAX_VALUE;
console.log(maior, menor);
for(let numeros of array_original){
    if(maior < numeros)
        maior = numeros
    if(menor > numeros)
        menor = numeros
}
console.log("O maior número é", maior, "e o menor é", menor);

// Desafio 2
let sorteado = Number(prompt("Escolha um numero para o adversário adivinhar !!!"))
console.log("Vamos Jogar!");
let chute = Number(prompt("Escolha um numero")), contador = 1
while(chute !== sorteado){
    console.log("o numero chutado foi:", chute)
    if(chute > sorteado)
        console.log("Errrrrrrrou, é menor");
    else
        console.log("Errrrrrrrou, é maior");
    chute = Number(prompt("Escolha um numero"))
    contador ++;
}
console.log("o numero chutado foi:", chute);
console.log("Acertou!!");
console.log("O número de tentativas foi:", contador);

// Desafio 3

let sorteado2 = Math.floor((Math.random() * 100) + 1);
console.log("Vamos Jogar!");
let chute2 = Number(prompt("Escolha um numero")), contador2 = 1
while(chute2 !== sorteado2){
    console.log("o numero chutado foi:", chute2)
    if(chute2 > sorteado2)
        console.log("Errrrrrrrou, é menor");
    else
        console.log("Errrrrrrrou, é maior");
    chute2 = Number(prompt("Escolha um numero"))
    contador2 ++;
}
console.log("o numero chutado foi:", chute2);
console.log("Acertou!!");
console.log("O número de tentativas foi:", contador2);

//Sim, foi fácil realizar a alteração. 
//Creio que esta foi a maneira mais simples de resolver.