/* Interpretação 

1 - (assumindo a cotação como 5,60) R$ 560

2 - 165 e Tipo de investimento informado incorreto!     

3 - 14.
    12 64 44 84 48 14 
    25 55 121 11 51 73 111 283

4 - -10 e 1590

*/

// Execução 

// 1 - while, for e for of exemplo: 

const array = [25, 55, 121, 11, 51, 73, 111, 283]

let contador = 0
while(contador < array.length){
    console.log(array[contador])
    contador++
}

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

for(numeros of array){
    console.log(numeros)
}

// 2 - a. false / b. true / c. true / d. true / e. true

// 3 - Não funciona. Pois ele entra em loop infinito 
const quantidadeDeNumerosPares = Number(prompt("quantos pares deseja?"))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

// 4 - 
let a = Number(prompt("qual o tamanho?"))
let b = Number(prompt("qual o tamanho?"))
let c = Number(prompt("qual o tamanho?"))

if (a === b && b === c){
    console.log("Equilátero")
}
else if(a === b || b === c || a === c){
    console.log("Isósceles")
}
else{
    console.log("Escaleno");
}

// 5 - 
const numero1 = Number(prompt("escolha um numero")), numero2 = Number(prompt("escolha outro numero"))

if(numero1 > numero2){
    console.log("o maior é:", numero1);
}
else{
    console.log("o maior é:", numero2);
}

if(numero1 % numero2 === 0){
    console.log(numero1 + " é divisível por " + numero2)
}
else{
    console.log(numero1 + " não é divisível por " + numero2);
}

if(numero2 % numero1 === 0){
    console.log(numero2 + " é divisível por " + numero1)
}
else{
    console.log(numero2 + " não é divisível por " + numero1);
}

console.log("a diferença entre eles é", Math.abs(numero1 - numero2))

// Funções

// 1 - 
let menor = Number.MAX_VALUE, seg_menor = Number.MAX_VALUE, maior = Number.MIN_VALUE, seg_maior = Number.MIN_VALUE
let numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 234, 12, 43, 56, 200, 17]

function segundoMaiorMenor(arrayNumeros){
    for(num of arrayNumeros){
        if(num < menor){
            menor = num
        }
    }
    for(num of arrayNumeros){
        if(num < seg_menor && num !== menor){
            seg_menor = num
        }
    }
    for(num of arrayNumeros){
        if(num > maior){
            maior = num
        }
    }
    for(num of arrayNumeros){
        if(num > seg_maior && num !== maior){
            seg_maior = num
        }
    }
    console.log(seg_maior)
    console.log(seg_menor)
}

segundoMaiorMenor(numbers)

// 2 -
let hello = () =>{
    console.log("Hello Labenu!")
}

hello()

// Objetos

/* 1 - 
    Array -> É uma sequencia de dados não ordenada, 
    deve ser utilizada quando precisamos guardar uma coleção de elementos.    

    Objeto -> Uma estrutura com o propósito de moldar objetos reais,
    trazendo um nível maior de compreensão e organização. 
    Utilizada para criar aplicações mais complexas de forma organizada, 
    atribuindo características e ações possíveis para tal objeto. 
*/

// 2 -
    function criaRetangulo(lado1, lado2) {
        const retangulo = {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: lado1 * lado2
        }
        return retangulo
    }

// 3 -
let filme = {
    titulo: "Django Livre",
    ano: 2012 ,
    diretor: "Quentin Tarantino",
    elenco: ["Jamie Foxx", " Leonardo DiCaprio", " Christoph Waltz"]
}
console.log("Venha assistir ao filme " + filme.titulo + " de " + filme.ano + " dirigido por " + filme.diretor + " e estrelado por " + filme.elenco)

// 4 -
let person = {
    nome:"João",
    idade: 24,
    email:"Mdx@gmail.com",
    endereco:"Av. José Camelo de Freitas, N: 346"
}

function anonimizarPessoa(pessoa){
    let anonimo = {
        ...pessoa,
        nome: 'anônimo'
    }
    return anonimo
}

// Função de Array

// 1 - 
let pessoas = [
    {nome: 'Pedro', idade: 20},
    {nome: 'João', idade: 10},
    {nome: 'Paula', idade: 12},
    {nome: 'Artur', idade: 89}
]
// a - 

function arrayAdultos(array){
    let adultos = []
    for(gente of array){
        if(gente.idade >= 20){
            adultos.push(gente)
        }
    }
    return adultos
}

// b - 
function arrayJovens(array){
    let jovens = []
    for(gente of array){
        if(gente.idade >= 20){
            jovens.push(gente)
        }
    }
    return jovens
}

// 2 -
const arrayPadrao = [1, 2, 3, 4, 5, 6]

// a - 
function dobrarArray(array){
    let arrayDobro = []
    for(valores of array){
        arrayDobro.push(valores*2)
    }
    return arrayDobro
}
// b -
function triplicarArray(array){
    let arrayTriplo = []
    for(valores of array){
        arrayTriplo.push(valores*3)
    }
    return arrayTriplo
}

// c - 
function parImpar(array){
    const arraySting = []
    for(valores of array){
        if(valores % 2 === 0){
            arraySting.push(`${valores} é par`) 
        }
        else{
            arraySting.push(`${valores} é impar`)
        }
    }
    return arraySting;
}
let teste = parImpar(arrayPadrao)
console.log(teste);

// 3 -
const people = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//a -
function podeEntrar(array){
    let aprovados = []
    for(gente of array){
        if(gente.altura > 1.5 && gente.idade > 14 && gente.idade < 60 ){
            aprovados.push(gente)
        }
    }
    return aprovados
}
// b -
function naoEntra(array){
    let reprovados = []
    for (gente of array) {
        if(gente.altura < 1.5 || gente.idade <=14 || gente.idade >= 60){
            reprovados.push(gente)
        }
    }
    return reprovados
}

// 4 -
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]
function consultaCancelada(array){
    let canceladas = []
    for (consulta of array) {
        if(consulta.cancelada && consulta.genero === "masculino"){
            canceladas.push(`Olá, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada
            para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la`);
        }
        else if(consulta.cancelada && consulta.genero === "feminino"){   
            canceladas.push(`Olá, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada
            para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la`);
        }
    }
    return canceladas
}

function consultaAgendada(array){
    let agendadas = []
    for (consulta of array) {
        if(!consulta.cancelada && consulta.genero === "masculino"){
            agendadas.push(`Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para
                lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`);
        }
        else if(!consulta.cancelada && consulta.genero === "feminino"){   
            agendadas.push(`Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para
            lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
            o recebimento deste e-mail.`);
        }
    }
    return agendadas
}

const cancel = consultaCancelada(consultas)
const marcadas = consultaAgendada(consultas)
console.log(cancel);
console.log(marcadas);

// 5 -
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo(array){
    let pagar = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].compras.length; j++){
            pagar += array[i].compras[j] 
        }
        array[i].saldoTotal -= pagar
        pagar = 0
    }
}
atualizaSaldo(contas)
console.log(contas);