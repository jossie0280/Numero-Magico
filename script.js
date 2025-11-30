let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 1;

const inputUsuario = document.getElementById('entradaUsuario');
const botonIntentar = document.getElementById('botonIntentar');
const botonReiniciar = document.getElementById('botonReiniciar');
const pMensaje = document.getElementById('mensaje');

function verificarIntento() {
    let numeroUsuario = inputUsuario.value;

    if (numeroUsuario === '') {
        alert("Por favor, debes ingresar un número.");
        return;
    }

    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        let palabraIntento = intentos === 1 ? "intento" : "intentos";
        pMensaje.style.color = "#ffd700"; 
        pMensaje.innerHTML = `✨ ¡Felicidades! Adivinaste el número en ${intentos} ${palabraIntento}. ✨`;
        
        botonIntentar.setAttribute('disabled', 'true');
        botonReiniciar.removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
            pMensaje.textContent = "🔮 Pista: El número secreto es MAYOR.";
            pMensaje.style.color = "#ffffff";
        } else {
            pMensaje.textContent = "🔮 Pista: El número secreto es MENOR.";
            pMensaje.style.color = "#ffffff";
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    inputUsuario.value = '';
    inputUsuario.focus();
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 1;
    
    limpiarCaja();
    pMensaje.textContent = 'Esperando tu primer intento...';
    pMensaje.style.color = "#ffffff";
    
    botonIntentar.removeAttribute('disabled');
    botonReiniciar.setAttribute('disabled', 'true');
}

botonIntentar.addEventListener('click', verificarIntento);
botonReiniciar.addEventListener('click', reiniciarJuego);let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 1;

const inputUsuario = document.getElementById('entradaUsuario');
const botonIntentar = document.getElementById('botonIntentar');
const botonReiniciar = document.getElementById('botonReiniciar');
const pMensaje = document.getElementById('mensaje');

function verificarIntento() {
    let numeroUsuario = inputUsuario.value;

    if (numeroUsuario === '') {
        alert("Por favor, debes ingresar un número.");
        return;
    }

    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        let palabraIntento = intentos === 1 ? "intento" : "intentos";
        pMensaje.style.color = "#ffd700"; 
        pMensaje.innerHTML = `✨ ¡Felicidades! Adivinaste el número en ${intentos} ${palabraIntento}. ✨`;
        
        botonIntentar.setAttribute('disabled', 'true');
        botonReiniciar.removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
            pMensaje.textContent = "🔮 Pista: El número secreto es MAYOR.";
            pMensaje.style.color = "#ffffff";
        } else {
            pMensaje.textContent = "🔮 Pista: El número secreto es MENOR.";
            pMensaje.style.color = "#ffffff";
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    inputUsuario.value = '';
    inputUsuario.focus();
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 1;
    
    limpiarCaja();
    pMensaje.textContent = 'Esperando tu primer intento...';
    pMensaje.style.color = "#ffffff";
    
    botonIntentar.removeAttribute('disabled');
    botonReiniciar.setAttribute('disabled', 'true');
}

botonIntentar.addEventListener('click', verificarIntento);
botonReiniciar.addEventListener('click', reiniciarJuego);
