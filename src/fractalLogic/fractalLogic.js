import * as messenger from "./constants.js"

// Espera a que el DOM cargue
window.addEventListener("DOMContentLoaded", () => {
// Obtener los botones por ID
    const bottonA = document.getElementById("A");
    const bottonB = document.getElementById("B");
    const bottonC = document.getElementById("C");
    let intro = document.getElementById("introduction") 



    bottonA.addEventListener("click", () => {
        intro.textContent = messenger.showA;

        bottonA.addEventListener("click",() => {
            intro.textContent = messenger.showAOption1
        });

        bottonB.addEventListener("click",() => {
            intro.textContent = messenger.showAOption2
        });

        bottonC.addEventListener("click",() => {
            intro.textContent = messenger.showAOption3
        });

    });

    bottonB.addEventListener("click", () => {
        intro.textContent = messenger.showB;

        bottonA.addEventListener("click",() => {
            intro.textContent = messenger.showBOption1
        });

        bottonB.addEventListener("click",() => {
            intro.textContent = messenger.showBOption2
        });

        bottonC.addEventListener("click",() => {
            intro.textContent = messenger.showBOption3

            bottonA.addEventListener("click",() => {
                alert("Opss. Pierdes 1 intento");
            });

            bottonB.addEventListener("click",() => {
                alert("Felicidades. Ganas 1 vida");
            });

            bottonC.addEventListener("click",() => {
                alert("Opss. Pierdes 1 intento");
            });

        });

    });


    bottonC.addEventListener("click", () => {
        intro.textContent = messenger.showC;

        bottonA.addEventListener("click",() => {
            intro.textContent = messenger.showQuestion1

            bottonA.addEventListener("click",() => {
                alert("Felicidades");
            });

            bottonB.addEventListener("click",() => {
                alert("Opss");
            });

            bottonC.addEventListener("click",() => {
                alert("Opss");
            });

        });

        bottonB.addEventListener("click",() => {
            intro.textContent = messenger.showQuestion2

            bottonA.addEventListener("click",() => {
                alert("Opss");
            });

            bottonB.addEventListener("click",() => {
                alert("Felicidades");
            });

            bottonC.addEventListener("click",() => {
                alert("Opss");
            });
        });

        bottonC.addEventListener("click",() => {
            intro.textContent = messenger.showQuestion3

            bottonA.addEventListener("click",() => {
                alert("Opss");
            });

            bottonB.addEventListener("click",() => {
                alert("Opss");
            });

            bottonC.addEventListener("click",() => {
                alert("Felicidades");
            });
        });

    });

});
