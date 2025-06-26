import {getplayerData,nextLevel} from "../utils/utils.js"
var playerData = getplayerData()

let life = playerData.lives;
let score = playerData.points;

function startGame(option) {

    const title = document.getElementById("title");
    const paragraph = document.getElementById("paragraph");
    const optionClick = document.getElementById("optionClick");
    const containerButtons = document.getElementById("containerButtons");
    const textBelow = document.getElementById("textBelow");
    

    if(option === "simulated") {

        title.textContent = "Bienvenido al entorno simulado";
        paragraph.textContent = "En este entorno, podrás practicar tus habilidades de programación y resolver desafíos.";
        optionClick.textContent = "Haz clic para iniciar el juego";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="nextLevel('miniGame')">Iniciar desafío</button>
        `;
        
    }else if(option === "trapped") {

        title.textContent = "¡Has caído en una trampa!";
        paragraph.textContent = "Moriste por una trampa mortal. Tu vida esta en 0. Perdiste el juego.";
        optionClick.textContent = "Intenta de nuevo";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="location.reload()">Reiniciar</button>
        `;
    } else if (option === "logical"){

        title.textContent = "Adivina el acertijo";
        paragraph.textContent = "Hay cuatro piedras elementales: Fuego 🔥, Agua 💧, Aire 🌪️ y Tierra 🪨."
        textBelow.innerHTML = `
            <p>“La piedra que apaga, va antes que la que quema.</p>
            <p>La que sostiene todo, no va al final.</p>
            <p>El aire nunca va en primer lugar.”</p>  
        `;
        optionClick.textContent = "Presiona la opcion que tenga el orden correcto de las piedras";
        containerButtons.innerHTML = `
            <button class="btn btn-danger" onclick="startGame('correct')">💧, 🪨, 🌪️, 🔥</button>
            <button class="btn btn-danger" onclick="startGame('incorrect')">💧, 🔥, 🌪️, 🪨</button>
            <button class="btn btn-danger" onclick="startGame('incorrect')">🔥, 🌪️, 🪨, 💧</button>
            <button class="btn btn-danger" onclick="startGame('incorrect')">🪨, 🔥, 💧, 🌪️</button>
        `;
    }else if (option === "correct"){
        title.textContent = "¡Respuesta correcta!";
        paragraph.textContent = "Has resuelto el acertijo. Tu puntaje ha aumentado.";
        score += 5;
        textBelow.textContent = `Puntaje actual: ${score}`;
        optionClick.textContent = "Haz clic para continuar al siguiente nivel";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="nextLevel('decisionLabyrinth')">Siguiente nivel</button>
        `;
    }else if (option === "incorrect"){
        title.textContent = "Respuesta incorrecta";
        paragraph.textContent = "Has fallado el acertijo. Tu vida ha disminuido.";
        life -= 1;
        textBelow.textContent = `Vidas restantes: ${life}`;
        if (life === 0){
            title.textContent = "¡Has perdido!";
            paragraph.textContent = "No te quedan vidas. Has perdido el juego.";
            optionClick.textContent = "Intenta de nuevo";
            containerButtons.innerHTML = `
                <button class="btn btn-primary" onclick="location.reload()">Reiniciar</button>
            `;
        }else {
            optionClick.textContent = "Haz clic para intentar de nuevo";
            containerButtons.innerHTML = `
                <button class="btn btn-primary" onclick="startGame('logical')">Intentar de nuevo</button>
            `;
        }
    }  
}    



