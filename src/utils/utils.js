import {lives,points} from "./temporalData.js"


export function getplayerData() {
return [lives,points]
}

export function nextLevel(totalPoints, tolalLives) {
     lives = tolalLives
     points = totalPoints
}