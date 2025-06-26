import {getplayerData,nextLevel} from "../utils/utils.js"
var playerData = getplayerData()


let life = playerData.lives;
let attempts = 2;
let score = playerData.points;

function labyrinth(option , option2 ) {

    let title = document.getElementById("title");
    let paragraph = document.getElementById("paragraph");
    let optionClick = document.getElementById("optionClick");
    let containerButtons = document.getElementById("containerButtons");
    let textBelow = document.getElementById("textBelow");
    

    if (option === "condition") {
        title.textContent = "¡Reto de condiciones!";
        paragraph.textContent = "Eres estudiante y estás intentando entrar al laboratorio de informática.Solo puedes entrar si:";
        optionClick.textContent = "Estás matriculado en el semestre actual Y tu carné está activo";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="condition('incorrect')">if (matriculado == true || carnetActivo == true)</button>
            <button class="btn btn-primary" onclick="condition('correct')">if (matriculado && carnetActivo)</button>
            <button class="btn btn-primary" onclick="condition('incorrect')">if (!matriculado && carnetActivo)</button>

        `;
        function condition(option2){
            if (option2 == "correct"){
                title.textContent = "¡Respuesta Correcta!";
                paragraph.textContent = "¡Bien hecho! La condición es correcta ya que necesita que los 2 este true.";
                optionClick.textContent = "Continuar";
                score += 5;
                textBelow.textContent = `Puntaje actual: ${score}`;
                containerButtons.innerHTML = `
                    <button class="btn btn-primary" onclick="nextLevel('reconstructionChallenge')">Continuar</button>
                `;

            }else if (option2 === "incorrect") {
                life--;
                score -= 2
                if (life > 0) {
                    title.textContent = "Respuesta Incorrecta";
                    paragraph.textContent = `Inténtalo de nuevo. Te quedan ${life} vidas.`;
                    optionClick.textContent = "Reintentar";
                    containerButtons.innerHTML = `
                        <button class="btn btn-primary" onclick="labyrinth('conditon')">Reintentar</button>
                    `;
                } else {
                    title.textContent = "Juego Terminado";
                    paragraph.textContent = "Has perdido todas tus vidas. ¡Inténtalo de nuevo!";
                    optionClick.textContent = "Reiniciar";
                    containerButtons.innerHTML = `
                        <button class="btn btn-primary" onclick="location.reload()">Reiniciar</button>
                    `;
                }
            } 
        }
        return condition(option2);

    }else if (option === "access") {
        title.textContent = "¡Acceso directo!";
        paragraph.textContent = "Has elegido el acceso directo. ¡Bien hecho!";
        optionClick.textContent = "Continuar";
        score += 5;
        textBelow.textContent = `Puntaje actual: ${score}`;
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="nextLevel('reconstructionChallenge')">Continuar</button>
        `;

    }else if (option === "code"){
        title.textContent = "¡Reto de Código!";
        paragraph.textContent = "Observa el siguiente código y responde.<br>Codigo: <code>let resultado =  `2` + 2;</code>";
        optionClick.textContent = "¿Qué valor tendrá la variable resultado?";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="labyrinth('incorrect')">4</button>
            <button class="btn btn-primary" onclick="labyrinth('correct')">22</button>
            <button class="btn btn-primary" onclick="labyrinth('incorrect')">undefined</button>
            <button class="btn btn-primary" onclick="labyrinth('incorrect')">2</button>
        `;
    }else if (option === "correct") {
        title.textContent = "¡Respuesta Correcta!";
        paragraph.textContent = "¡Bien hecho! La variable resultado tendrá el valor de 22, ya que se realiza una concatenación de cadena y número.";
        optionClick.textContent = "Continuar";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="nextLevel('reconstructionChallenge')">Continuar</button>
        `;
        score += 5;

    }else if (option === "incorrect") {
        life--;
        score -= 2
        if (life > 0) {
            title.textContent = "Respuesta Incorrecta";
            paragraph.textContent = `Inténtalo de nuevo. Te quedan ${life} vidas.`;
            optionClick.textContent = "Reintentar";
            containerButtons.innerHTML = `
                <button class="btn btn-primary" onclick="labyrinth('code')">Reintentar</button>
            `;
        } else {
            title.textContent = "Juego Terminado";
            paragraph.textContent = "Has perdido todas tus vidas. ¡Inténtalo de nuevo!";
            optionClick.textContent = "Reiniciar";
            containerButtons.innerHTML = `
                <button class="btn btn-primary" onclick="location.reload()">Reiniciar</button>
            `;
        }
    } 
}
function condition(option2){
    if (option2 == "correct"){
        title.textContent = "¡Respuesta Correcta!";
        paragraph.textContent = "¡Bien hecho! La condición es correcta ya que necesita que los 2 esten true.";
        optionClick.textContent = "Continuar";
        containerButtons.innerHTML = `
            <button class="btn btn-primary" onclick="nexLevel()">Continuar</button>
        `;
        score += 5;
    }else if (option2 === "incorrect") {
        life--;
        score -= 2;
        if (life > 0) {
            title.textContent = "Respuesta Incorrecta";
            paragraph.textContent = `Inténtalo de nuevo. Te quedan ${life} vidas.`;
            optionClick.textContent = "Reintentar";
            containerButtons.innerHTML = `
                <button class="btn btn-primary" onclick="labyrinth('condition')">Reintentar</button>
            `;
        } else {
            title.textContent = "Juego Terminado";
            paragraph.textContent = "Has perdido todas tus vidas. ¡Inténtalo de nuevo!";
            optionClick.textContent = "Reiniciar";
            containerButtons.innerHTML = `
                <button class="btn btn-primary" onclick="location.reload()">Reiniciar</button>
            `;
        }
    } 
}