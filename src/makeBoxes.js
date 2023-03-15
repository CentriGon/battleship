let leftBoxesArray = []; 
let rightBoxesArray = [];
let middleBoxesArray = [];

function createTiles() {
    const rightBoxes = document.querySelector('.rightBoxes');
    const leftBoxes = document.querySelector('.leftBoxes');
    const middleBoxes = document.querySelector('.middleBoxes')

    for (let i = 0; i < 224; i++) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'leftTile tile');
        tile.setAttribute('id', i);
        leftBoxes.appendChild(tile);
        leftBoxesArray[i] = tile;
    }

    for (let i = 0; i < 224; i++) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'rightTile tile')
        tile.setAttribute('id', "r"+i);
        rightBoxes.appendChild(tile);
        rightBoxesArray[i] = tile;
    }

    // for (let i = 0; i < 224; i++) {
    //     let tile = document.createElement('div');
    //     tile.setAttribute('class', 'middleTile');
    //     tile.setAttribute('class', 'tile');
    //     tile.setAttribute('id', i);
        
    //     middleBoxes.appendChild(tile);
    //     middleBoxesArray[i] = tile;
    // }

}


export {createTiles, leftBoxesArray, rightBoxesArray, middleBoxesArray}