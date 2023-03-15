import {createTiles, leftBoxesArray, rightBoxesArray, middleBoxesArray} from './makeBoxes'



function playerSpots() {

    createTiles();
    
    let playerSpotsArray = [
        [0, 16, 32, 48, 64, 80],
        [153, 154, 155, 156, 157],
        [30, 46, 62, 78],
        [84, 100, 116],
        [105, 106],
        [215, 216],
    ]

    playerSpotsArray.forEach((val, index) => {
        playerSpotsArray[index].forEach((val, x, array) => {
            const div = document.getElementById(val);
            div.setAttribute('class', 'tile leftTile selectedTile')
            playerSpotsArray[index][x] = div;
        })
    })

    let computerSpotsArray = [
        [0, 16, 32, 48, 64, 80],
        [153, 154, 155, 156, 157],
        [30, 46, 62, 78],
        [84, 100, 116],
        [105, 106],
        [215, 216],
    ]

    computerSpotsArray.forEach((val, index) => {
        computerSpotsArray[index].forEach((val, x, array) => {
            const div = document.querySelector(".rightBoxes #r"+val);
            div.setAttribute('class', 'tile rightTile selectedTile')
            computerSpotsArray[index][x] = div;
        })
    })
    

    let player = {
        partsLeft: 22,
        parts: playerSpotsArray,
    }

    let computer = {
        partsLeft: 22,
        parts: computerSpotsArray,
    }

    return {player, computer}

    
}

export {playerSpots}