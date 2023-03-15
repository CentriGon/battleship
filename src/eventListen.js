import {playerSpots} from './placeShips'
import { botHit } from './botData';


function addListeners() {
    const players = playerSpots();

    players.computer.parts.forEach((val, index) => {
        players.computer.parts[index].forEach((val) => {
            console.log('enter')
            val.addEventListener('click', () => {
                if (val.getAttribute('class').includes('selectedTile') == true) {
                    val.setAttribute('class', val.getAttribute('class').substring(0, val.getAttribute('class').indexOf(' ', 5)));
                    players.computer.partsLeft -= 1;
                }
            })
        })
    })

    botHit(players.player)


    while (players.player.partsLeft != 0 || players.computer.partsLeft != 0) {
        console.log('round')
        
    }
}

export {addListeners}