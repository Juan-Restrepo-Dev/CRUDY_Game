// Imports
import {setPlayerData,getplayerData,nextLevel} from "./utils/utils.js"


// Variables
// let player = ""
// let lifes = ""
// let points = ""
// Funciones

// //PELU CAAMBIAR ESTO POR HTML !!!
// let player = prompt("Ingresa tu nombre")
// //////////////////////////////////////
const dialog = document.querySelector("dialog");
const showDialogNewgame = document.querySelector("dialog + button");
const starGame = document.querySelector("dialog button");


// reinicia el jugador

// setPlayerData(player)



// "Show the dialog" button opens the dialog modally
showDialogNewgame.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
starGame.addEventListener("click", () => {
  let playerName = document.getElementById("playerName").value
  playerName = playerName.value;  
  nextLevel(0,3,"initiationProtocol")
});


//obtiene los datos para ser utilizados
console.log(getplayerData());


// // esta funcion recibe 3 parametros  son 1.puntos ganados en el nivel lo que introduzcas sera sumado 2.el numero de vidas perdidas se restaran de las vidas totales 3. el nombre del siguiente nivel igual como se llama su modulo ejemplo = "reconstructionChallenge"
// nextLevel(10,3,"reconstructionChallenge")
