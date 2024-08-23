var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco"); // Fixed selector
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto); // Fixed textContent
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto); // Fixed textContent
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) { // Fixed length
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    var i = 0;

    while (i < texto.length) { // Changed to while loop for better control
        if (texto.substring(i, i + 2) == "ai") {
            textoFinal += "a";
            i += 2;
        } else if (texto.substring(i, i + 5) == "enter") {
            textoFinal += "e";
            i += 5;
        } else if (texto.substring(i, i + 4) == "imes") {
            textoFinal += "i";
            i += 4;
        } else if (texto.substring(i, i + 4) == "ober") {
            textoFinal += "o";
            i += 4;
        } else if (texto.substring(i, i + 4) == "ufat") {
            textoFinal += "u";
            i += 4;
        } else {
            textoFinal += texto[i];
            i++;
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    var contenido = resultado.textContent; // Use the already defined resultado variable
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles"); // Updated message for clarity
});
