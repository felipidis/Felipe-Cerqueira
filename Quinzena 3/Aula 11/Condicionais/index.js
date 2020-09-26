/* Interpretação 

1 - Verifica se o número digitado é par. Se for imprime "Passou no teste."
    caso contrário, imprime "Não passou no teste.".

2 -
    2.1 - faz uma relação entre as frutas e seus preços, 
        assim selecionando uma fruta irá apresentar o preço da mesma.
    2.2 - "O preço da fruta Maçã é R$ 2.25".
    2.3 - "O preço da fruta Pêra é R$ 5".

3 - 
    3.1 - Pede para o usuário digitar um numero e depois converte para o tipo Number.
    3.2 - Para 10 irá aparecer "Esse número passou no teste" e para -10 nada, 
        mas em ambos os casos a ultima linha dará erro, pois let mensagem só existe no escopo do if. 
    3.3 - Como dito na resposta anterior vai ocorrer um erro com a variável "mensagem", 
        pois a mesma foi criada dentro do escopo do if e não pode ser acessada fora dele. 
*/

// Escrita 

// 4 -

let idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Ta liberado, pode dirigir!")
} else {
    console.log("Irmão tu não pode dirigir")
}

// 5 -

const periodo1 = prompt("Qual horário você estuda?")

if (periodo1 === "M") {
    console.log("Bom Dia!")
} else if (periodo1 === "V") {
    console.log("Boa Tarde!")
} else if (periodo1 === "N") {
    console.log("Boa Noite!")
}

// 6 -

const periodo2 = prompt("Qual horário você estuda?")

switch (periodo2) {
    case "M":
        console.log("Bom Dia!")
    break

    case "V":
        console.log("Boa Tarde!")
    break

    case "N":
        console.log("Boa Noite!")
    break
}

// 7 com desafio-

const genero = prompt("Qual o gênero de filme que vocês vão assistir?")
let preco = Number(prompt("Quanto custa o ingresso?"))

if (genero === "fantasia" && preco < 15) {
    let rango = prompt("Qual lanche vão querer para acompanhar ?")
    console.log("Bom filme! \n ... com", rango )
} else {
    console.log("Ih rapaz não vai dar não, escolhe outro filme")
}

// Desafio 2 -
let cliente = prompt("Seu nome completo por gentileza")
let tipo_jogo = prompt("Internacional ou Nacional ?")
let etapa_jogo = prompt("Qual etapa deseja ver ?")
let categoria = Number(prompt("Qual a categoria desejada?"))
let quantidade_ingressos = Number(prompt("Quantos ingressos deseja?"))
let valor

console.log("---Dados da compra---")
console.log("Nome do cliente:", cliente )

if(tipo_jogo === "IN")
    console.log("Tipo do jogo: Internacional")
else
    console.log("Tipo do jogo:  Nacional")
if(etapa_jogo === "FI")
    console.log("Etapa do jogo: Final")
else if(etapa_jogo === "DT")
    console.log("Etapa do jogo: Decisão do 3º lugar")
else    
    console.log("Etapa do jogo: Semifinais")
console.log("Categoria:", categoria)
console.log("Quantidade de ingressos:", quantidade_ingressos, "ingressos")
console.log("--- Valores ---");

if(tipo_jogo === "IN" && etapa_jogo === "FI" && categoria === 1){
    valor = 1980 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "FI" && categoria === 2){
    valor = 1320 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "FI" && categoria === 3){
    valor = 880 / 4.10 
    console.log("Valor do ingresso: U$", valor) 
}
else if(tipo_jogo === "IN" && etapa_jogo === "FI" && categoria === 4){
    valor = 330 / 4.10 
    console.log("Valor do ingresso: U$", valor) 
}
else if(tipo_jogo === "IN" && etapa_jogo === "DT" && categoria === 1){
    valor = 660 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "DT" && categoria === 2){
    valor = 440 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "DT" && categoria === 3){
    valor = 330 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "DT" && categoria === 4){
    valor = 170 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "SF" && categoria === 1){
    valor = 1320 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "SF" && categoria === 2){
    valor = 880 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "SF" && categoria === 3){
    valor = 550 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "IN" && etapa_jogo === "SF" && categoria === 4){
    valor = 220 / 4.10 
    console.log("Valor do ingresso: U$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "FI" && categoria === 1){
    valor = 1980
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "FI" && categoria === 2){
    valor = 1320
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "FI" && categoria === 3){
    valor = 880
    console.log("Valor do ingresso: R$", valor) 
}
else if(tipo_jogo === "DO" && etapa_jogo === "FI" && categoria === 4){
    valor = 330
    console.log("Valor do ingresso: R$", valor) 
}
else if(tipo_jogo === "DO" && etapa_jogo === "DT" && categoria === 1){
    valor = 660
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "DT" && categoria === 2){
    valor = 440
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "DT" && categoria === 3){
    valor = 330
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "DT" && categoria === 4){
    valor = 170
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "SF" && categoria === 1){
    valor = 1320
    console.log("Valor DO ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "SF" && categoria === 2){
    valor = 880
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "SF" && categoria === 3){
    valor = 550
    console.log("Valor do ingresso: R$", valor)
}
else if(tipo_jogo === "DO" && etapa_jogo === "SF" && categoria === 4){
    valor = 220
    console.log("Valor do ingresso: R$", valor)
}

console.log("Valor total: R$", valor*quantidade_ingressos);