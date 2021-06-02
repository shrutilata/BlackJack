let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Jenie",
    chips: 145

}

let playerEl =document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber>=11 && randomNumber<=13){
        return 10
    }
    else{
        return randomNumber
    }
}

function startGame(){
    let isAlive = true
    let firstCard = getRandomCard()
    cards.push(firstCard)
    sum += firstCard
    let secondCard = getRandomCard()
    cards.push(secondCard)
    sum += secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message="Do you want to draw a new card?"
        
    }
    else if (sum === 21) { 
        message="You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
     }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

