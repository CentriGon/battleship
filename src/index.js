import { shipFactory } from "./maincode";
import './style.css'
import { playerSpots } from "./placeShips";
import { addListeners } from "./eventListen";

const newShip = new shipFactory(6, [10, 20, 30, 40, 50, 60])

addListeners();

