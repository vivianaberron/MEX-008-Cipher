// Trayendo elementos desde encode.html
let cipherButton = document.getElementById('cipher-button');
let cipherInput = document.getElementById('cipher-box-encode');
let encodeOffset = document.getElementById('cipher-offset');

//cipherButton.addEventListener ('click', () => {
   // let cipherText = cipherEncode.value;
   // let encodeOffsetValue = parseInt(encodeOffset.value);
   // let 
// });

const mostrarTexto = () => {
 let cipherBlankSpace = document.getElementById('text-encode')
 let cipherText = cipherInput.value;
 let encodeOffsetValue = parseInt(encodeOffset.value);
 let result = window.cipher.encode(encodeOffsetValue, cipherText);
 cipherBlankSpace.innerHTML = result;
};

cipherButton.addEventListener('click', mostrarTexto);



