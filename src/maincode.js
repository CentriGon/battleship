
const shipFactory = function(length, coordinates) {
    
    this.length = length;
    this.isDown = false;
    this.coordinates = coordinates;

    function getLength() {
        return length;
    }

    function setIsDown() {
        isDown = true;
    }

    function getIsDown() {
        return isDown;
    }

    function getCoordinates() {
        return coordinates;
    }

    function setCoordinates(coords) {
        length = length - 1;
        coordinates = coords;
    }
    
    return {getLength, setIsDown, getIsDown, getCoordinates, setCoordinates}
}

// module.exports = {shipFactory}

export {shipFactory};