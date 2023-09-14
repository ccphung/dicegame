const rollDice = document.getElementById('roll-dice-img')
const player1Round = document.getElementById('player-one-crt-sc-number')
const player2Round = document.getElementById('player-two-crt-sc-number')
const player1Global = document.getElementById('player-one-total-point')
const player2Global = document.getElementById('player-two-total-point')
const diceImg = document.querySelector('#dice-img')
const holdImg = document.getElementById('hold-img')
const newGameBtn = document.getElementById('new-game-btn')

class Player {
    constructor(name, turn, roundPoint, globalPoint) {
        this.name = name
        this.turn = turn
        this.roundPoint = 0
        this.globalPoint = 0
    }

    rollTheDice(versus) {
        let rand = Math.ceil(Math.random()*6)
        diceImg.src="images/dice-"+rand+"-svgrepo-com.svg"

        let playersTurn = player1.turn ? player1Round : player2Round 

        if (rand !== 1) {
            this.roundPoint += rand
            playersTurn.innerHTML = this.roundPoint
        } else {
            this.roundPoint = 0
            this.turn = false
            versus.turn = true
            playersTurn.innerHTML = this.roundPoint
        }
        }

    hold() {
        let playersTurn = player1.turn ? player1Global : player2Global
        let playersTurnRound = player1.turn ? player1Round : player2Round

        this.globalPoint += this.roundPoint; 
        playersTurn.innerHTML = this.globalPoint
        playersTurnRound.innerHTML = this.roundPoint = 0;
        if(this.globalPoint >= 100) {
            alert(  'Bravo ' + this.name + ' vous avez gagné avec ' + this.globalPoint +" points")
            newGameBtn.click
        }
    }
}

let player1 = new Player('player1', false, 0, 0) 
let player2 = new Player('player2', true, 0, 0) 

// Jeter le dé
rollDice.addEventListener('click', () => {
    player1.turn ? player1.rollTheDice(player2) : player2.rollTheDice(player1)
})

// Envoyer les points dans le global
holdImg.addEventListener('click', () => {player1.turn ? player1.hold() : player2.hold()})

// Nouveau jeu
newGameBtn.addEventListener('click', () => {
    player1.globalPoint = player2.globalPoint = 0
    player1.roundPoint = player2.roundPoint =0
    player1Round.innerHTML = player2Round.innerHTML = 0
    player1Global.innerHTML = player2Global.innerHTML = 0

    console.log(player1.globalPoint + player2.globalPoint + player1.roundPoint + 
        player2.roundPoint + player1Round.innerHTML + player2Round.innerHTML +  
        player1Global.innerHTML + player2Global.innerHTML)
})