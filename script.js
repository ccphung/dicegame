const rollDice = document.getElementById('roll-dice-img')
const playerOneRound = document.getElementById('player-one-crt-sc-number')
const playerTwoRound = document.getElementById('player-two-crt-sc-number')
const playerOneGlobal = document.getElementById('player-one-total-point')
const playerTwoGlobal = document.getElementById('player-two-total-point')
const diceImg = document.querySelector('#dice-img')
const holdImg = document.getElementById('hold-img')


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

        let playersTurn = player1.turn ? playerOneRound : playerTwoRound 

        if (rand !== 1) {
            this.roundPoint += rand
            playersTurn.innerHTML = this.roundPoint
        } else {
            this.roundPoint = 0
            this.turn = false
            versus.turn = true
            playersTurn.innerHTML = this.roundPoint
        }

        console.log(player1.turn)
        console.log(player2.turn)
        }

        affiche() {
            console.log(this.turn)
            console.log(this.name)
        }

        
    hold() {
        let playersTurn = player1.turn ? playerOneGlobal : playerTwoGlobal
        let playersTurnRound = player1.turn ? playerOneRound : playerTwoRound

        this.globalPoint += this.roundPoint; 
        playersTurn.innerHTML = this.globalPoint
        playersTurnRound.innerHTML = this.roundPoint = 0;
        if(this.globalPoint >= 100) {
            alert(  'Bravo ' + this.name + ' vous avez gagné avec ' + this.globalPoint +" points")
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

