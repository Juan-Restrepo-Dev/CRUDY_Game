// import { player, lives, points } from "./temporalData.js"
import {changeModule} from "./changeLevel.js"

var player = ""
var lives = 3
var points = 0

export function setPlayerData(namePlayer) {
     player = namePlayer
     lives = 3
     points = 0
}

export function getplayerData() {
     return {player,lives, points}
}

export function nextLevel(winPoints, loseLives, nextLevel) {
     lives -= loseLives;
     points += winPoints;
     let mainRoot = document.getElementById("central")
     changeModule(nextLevel)
     
}

export function savePlayerRecord(params) {
     
}