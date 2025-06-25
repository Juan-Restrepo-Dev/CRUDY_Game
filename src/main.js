// Imports
import {setPlayerData,getplayerData,nextLevel} from "./utils/utils.js"


// Variables
// let player = ""
// let lifes = ""
// let points = ""
// Funciones

//PELU CAAMBIAR ESTO POR HTML !!!
let player = prompt("Ingresa tu nombre")
//////////////////////////////////////



// reinicia el jugador

setPlayerData(player)

//obtiene los datos para ser utilizados
console.log(getplayerData());


// esta funcion recibe 3 parametros  son 1.puntos ganados en el nivel lo que introduzcas sera sumado 2.el numero de vidas perdidas se restaran de las vidas totales 3. el nombre del siguiente nivel igual como se llama su modulo ejemplo = "reconstructionChallenge"
nextLevel(10,3,"reconstructionChallenge")
