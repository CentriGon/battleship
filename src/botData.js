let hitsArray = [];

function botHit(playerObject) {

    const randInt = Math.round(Math.random() * 224);
    playerObject.parts.forEach((val, index) => {
        playerObject.parts[index].forEach((val) => {
            if (val.getAttribute().includes('selectedTile') == true) {
                val.setAttribute('class', val.getAttribute().subtring(0, val.getAttribute().indexOf('0', 5)));
                playerObject.partsLeft -= 1;
            }
        })
    });
}

export {botHit}