const rollDice = document.getElementById('roll-dice-img')
const player1Round = document.getElementById('player-one-crt-sc-number')
const player2Round = document.getElementById('player-two-crt-sc-number')
const player1Global = document.getElementById('player-one-total-point')
const player2Global = document.getElementById('player-two-total-point')
const diceImg = document.querySelector('#dice-img')
const holdImg = document.getElementById('hold-img')
const newGameBtn = document.getElementById('new-game-btn')
const player1dot = document.getElementById('dot-turn-player1')
const player2dot = document.getElementById('dot-turn-player2')

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
            turnDisplay()

        }
        }

    hold() {
        let playersTurn = player1.turn ? player1Global : player2Global
        let playersTurnRound = player1.turn ? player1Round : player2Round

        this.globalPoint += this.roundPoint; 
        playersTurn.innerHTML = this.globalPoint
        playersTurnRound.innerHTML = this.roundPoint = 0;
        if(this.globalPoint >= 100) {
            alert(  'Bravo ' + this.name + ', vous avez gagné avec ' + this.globalPoint +" points !")
            alert('Recommencer une partie ?')
            newGame()
        }
    }

    dotDisplay() {

    }
}

let player1 = new Player('player1', true, 0, 0) 
let player2 = new Player('player2', false, 0, 0) 

// Jeter le dé
rollDice.addEventListener('click', () => {
    player1.turn ? player1.rollTheDice(player2) : player2.rollTheDice(player1)
})

// Envoyer les points dans le global
holdImg.addEventListener('click', () => {player1.turn ? player1.hold() : player2.hold()})

// Nouveau jeu
const newGame = () => {
    player1.globalPoint = player2.globalPoint = 0
    player1.roundPoint = player2.roundPoint =0
    player1Round.innerHTML = player2Round.innerHTML = 0
    player1Global.innerHTML = player2Global.innerHTML = 0
} 

newGameBtn.addEventListener('click', () => {
    newGame()
})

// fonction affichant le tour du joueur avec le point rouge
function turnDisplay() {
if(player1.turn) {
        player2dot.style.display ="none"
        player1dot.style.display =""
    } else {
        player2dot.style.display =""
        player1dot.style.display ="none"
    }

}

turnDisplay()
