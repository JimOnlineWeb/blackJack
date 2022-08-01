    let messageEl = document.getElementById("message-el")
    let sum=0
    let cards = []
    // let sumEl= document.getElementById("sum-El")
    let sumEl= document.querySelector("#sum-El")
    // if selector is class
    //let sumEl= document.querySelector(".sum-El")
    let hasBlackJack=false
    let isAlive = false 
    let message = messageEl
    let playerEl = document.querySelector("#player-El")

    let player={
        name:"Dada",
        face:"handsome"
    }
    let cardsEl = document.querySelector("#cards-el")
    playerEl.textContent=player.name+" "+player.face



    function getRandomCard(){
      // let randomNumber= Math.floor(Math.random()*10)+1
      // return randomNumber OR
      let randomNumber= Math.floor(Math.random()*10)+1
      // if (randomNumber>=11){
      //    randomNumber = 10}
      // else if (randomNumber===1){
      //   randomNumber = 11}
      // return randomNumber OR
      if (randomNumber>=11){
        return 10}
      else if (randomNumber===1){
       return 11}
      else{
        return randomNumber
      }
    }
    function startGame(){
      isAlive=true
      let firstCard = getRandomCard()
      let secondCard = getRandomCard()
      cards = [firstCard,secondCard]
      sum=firstCard+secondCard

      renderGame()
    } 
  
    function renderGame()
    {
      cardsEl.textContent="Cards: "
      for (let i=0; i<cards.length; i++){
      cardsEl.textContent+=cards[i]+" "
      }
      sumEl.textContent="Sum: "+sum
      
        if (sum <= 20){
        message="Do you want another card?"
        isAlive=true
      } else if (sum === 21){
        message="You've got Blackjack!"
        hasBlackJack=true
      } else{
        message="You're out of the game!"
        isAlive=false
      }
      messageEl.textContent=message
    }  
      function newCard(){
      if (isAlive===true && hasBlackJack===false)
      {
      let thirdCard= getRandomCard()
      sum+=thirdCard
      cards.push(thirdCard)
      renderGame() 
      }
    }

      