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
console.log("Bem vindo ao jogo de Blackjack!");
if(confirm("Quer iniciar uma nova rodada?")){
   const userCard1 = comprarCarta(), //Aqui iremos iniciar a partida puxando duas cartas para cada um.
      userCard2 = comprarCarta(), 
         robotCard1 = comprarCarta(),
            robotCard2 = comprarCarta();
   const userScore = userCard1.valor + userCard2.valor, // Aqui a pontuação dos jogadores é atualizada
      robotScore = robotCard1.valor + robotCard2.valor; // Com base em suas cartas.
      console.log("Usuário - cartas:", userCard1.texto, userCard2.texto, "- pontuação", userScore); // Mostrando as cartas
      console.log("Computador - cartas:", robotCard1.texto ,robotCard2.texto, "- pontuação", robotScore); // e a pontuação.
   
   if(userScore > 21) // Estrutura condicional que vai analisar e decidir quem é o vencedor da partida.
      console.log("Computador venceu !!!");
   else if(robotScore > 21)
      console.log("Usuário venceu !!!");
   else if(userScore === robotScore)
      console.log("Empate !!!");
   else if(userScore > robotScore)
      console.log("Usuário venceu !!!");
   else 
      console.log("Computador venceu !!!");
}
else{ // Caso não iniciem uma rodada o jogo simplesmente acaba.
   console.log("O jogo acabou !");
}