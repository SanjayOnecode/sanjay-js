let sum = 0

let cards = [];

let message = ""
let messageText = document.getElementById("messageText")

let selectedCards = document.getElementById("selectedCards")

let sumOfCards = document.getElementById("sumOfCards")

function randomNumber() {
   let randomCard = Math.floor(Math.random() * 13)
   return randomCard
}

function startGame () {
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame () {

if ( sum < 21) {
    selectedCards.textContent = "Cards : "
    for(let i = 0 ; i < cards.length; i++) {
        selectedCards.textContent += cards[i] + " "
    }
    sumOfCards.textContent = "Sum : " + sum
    message = "Do you want to draw a new card"
} else if ( sum === 21) {
    message = "Congratulations! You got Balck Jack"
} else if ( sum > 21){
    message = "You are out of the Game!"
}

messageText.textContent = message

}

function newCard () {
    let thirdCard = randomNumber()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
}