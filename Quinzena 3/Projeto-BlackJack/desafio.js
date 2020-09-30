/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

if(confirm("Quer iniciar uma nova rodada?")){
   const userCards = [comprarCarta(), comprarCarta()], // Arrays recebendo as duas cartas iniciais
      robotCards =  [comprarCarta(), comprarCarta()]; // para os respectivos jogadores usuário e computador. 
   if(userCards[0] === 'A' && userCards[1] === 'A')
      userCards[0] = comprarCarta(), userCards[1] = comprarCarta();
   else if(robotCards[0] === 'A' && robotCards[1] === 'A') // Verificando se as cartas inicias são dois 'A'
      robotCards[0] = comprarCarta(), robotCards[1] = comprarCarta();
   let userScore = 0, robotScore = 0, 
      Quest = confirm("Suas cartas são " + userCards[0].texto + " " + userCards[1].texto + ". A carta revelada do computador é " + robotCards[0].texto + ". Deseja comprar mais uma carta?");
   while(Quest){ // Aqui iniciamos um laço de repetição que vai verificar se o jogador pode e se quer puxar mais cartas.
      userCards.push(comprarCarta());
      userScore = 0;
      for(let i = 0; i < userCards.length; i++)
         userScore += userCards[i].valor;
      if(userScore < 21){
         let temp = " "
         for(let i = 0; i < userCards.length; i++){
            temp += userCards[i].texto + " "; 
         } 
         Quest = confirm("Suas cartas são " + temp + ". A carta revelada do computador é " + robotCards[0].texto + ". Deseja comprar mais uma carta?");
      }
      else // Caso o jogador opte por não continuar puxando ou passe do limite de pontos o laço acaba e o programa segue.
         Quest = !Quest;
   }
   userScore = 0;
   for(let i = 0; i < userCards.length; i++)
      userScore += userCards[i].valor;
   for(let i = 0; i < robotCards.length; i++)
      robotScore += robotCards[i].valor;
   let loop = userScore <= 21 && robotScore <= userScore; // Aqui fazemos uma comparação entre as pontuações dos jogadores 
   while(loop){ // para utilizar loop como condição do laço while e iniciar a vez do computador puxar as cartas.
      robotCards.push(comprarCarta());
      robotScore = 0;
      for(let i = 0; i < robotCards.length; i++)
         robotScore += robotCards[i].valor;
      loop = userScore <= 21 && robotScore <= userScore;
   }
   let temp1 = " ", temp2 = " ";
   for(let i = 0; i < userCards.length; i++) // Usaremos apenas para deixar a mensagem do alert mais curta. 
      temp1 += userCards[i].texto + " ";
   for(let i = 0; i < robotCards.length; i++)
      temp2 += robotCards[i].texto + " ";
   if(userScore > 21 && robotScore <= 21) // verificando os resultados e soltando o alert na tela indicando o resultado.
      alert("Suas cartas são " + temp1 + ". Sua pontuação é " + userScore + ". As cartas do computador são " + temp2 + ". A pontuação do computador é " + robotScore + ". " + " Computador venceu !!!");
   else if(robotScore > 21 && userScore <= 21)
      alert("Suas cartas são " + temp1 + ". Sua pontuação é " + userScore + ". As cartas do computador são " + temp2 + ". A pontuação do computador é " + robotScore + ". " + " Usuário venceu !!!");
   else if(robotScore > 21 && userScore > 21)
      alert("Suas cartas são " + temp1 + ". Sua pontuação é " + userScore + ". As cartas do computador são " + temp2 + ". A pontuação do computador é " + robotScore + ". " + " Empate!!!");
   else if(userScore === robotScore)
      alert("Suas cartas são " + temp1 + ". Sua pontuação é " + userScore + ". As cartas do computador são " + temp2 + ". A pontuação do computador é " + robotScore + ". " + " Empate!!!");
   else if(userScore > robotScore)
      alert("Suas cartas são " + temp1 + ". Sua pontuação é " + userScore + ". As cartas do computador são " + temp2 + ". A pontuação do computador é " + robotScore + ". " + " Usuário venceu !!!");
   else 
      alert("Suas cartas são " + temp1 + ". Sua pontuação é " + userScore + ". As cartas do computador são " + temp2 + ". A pontuação do computador é " + robotScore + ". " + " Computador venceu !!!");
}
else{
   console.log("O jogo acabou !!!");
}