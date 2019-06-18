// Trayendo elementos desde encode.html para aplicar encode
let cipherButton = document.getElementById('cipher-button');
let cipherInput = document.getElementById('cipher-box-encode');
let encodeOffset = document.getElementById('cipher-offset');

const mostrarTexto = () => {
 let cipherBlankSpace = document.getElementById('text-encode')
 let cipherText = cipherInput.value;
 let encodeOffsetValue = parseInt(encodeOffset.value);
 let result = window.cipher.encode(encodeOffsetValue, cipherText);
 cipherBlankSpace.innerHTML = result;
};

cipherButton.addEventListener('click', mostrarTexto);







