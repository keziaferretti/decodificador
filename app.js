const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnCriptografar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";

}

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textodesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textodesencriptado
    mensagem.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("mensagem");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function limparTexto() {
    document.getElementById("mensagem").value = ""; // Limpa o conteúdo da textarea
    mensagem.style.backgroundImage = "url('menino.svg')"; // Restaura a imagem de fundo

}

