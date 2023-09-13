const rollDice = document.getElementById('roll-dice-img')
const playerOneRound = document.getElementById('player-one-crt-sc-number')
const diceImg = document.querySelector('#dice-img')
const holdImg = document.getElementById('hold-img')
const totalPoint = document.getElementById('global-point')


class Player {
    constructor(name, turn, roundPoint, globalPoint) {
        this.name = this.name
        this.turn = Boolean
        this.roundPoint = 0
        this.globalPoint = 0
    }

    rollTheDice() {
        let rand = Math.ceil(Math.random()*6)

        diceImg.src="images/dice-"+rand+"-svgrepo-com.svg"
            
        this.roundPoint += rand
        console.log(this.roundPoint)
  
        playerOneRound.innerHTML = this.roundPoint
        }
        
    hold() {
        this.globalPoint += this.roundPoint; 
        totalPoint.innerHTML = this.globalPoint

        playerOneRound.innerHTML = this.roundPoint = 0;
    }

}



    let player1 = new Player('player1', true, 0, 0) 

rollDice.addEventListener('click', () => {player1.rollTheDice()})
holdImg.addEventListener('click', () => {player1.hold()})

