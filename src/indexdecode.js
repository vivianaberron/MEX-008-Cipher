//Trayendo elementos desde decode.html
let cipherButtonD = document.getElementById('cipher-button-decode');
let cipherInputD = document.getElementById('cipher-box-decode');
let seatOffset = document.getElementById('offset-decode');
 
const mostrarTextoDecode = () => {
    let cipherBlankSpaceD = document.getElementById('text-decode');
    let cipherTextD = cipherInputD.value;
    let offsetDecode = parseInt(seatOffset.value);
    let resultDecode = window.cipher.decode(offsetDecode, cipherTextD);
    cipherBlankSpaceD.innerHTML = resultDecode;
};

cipherButtonD.addEventListener('click', mostrarTextoDecode);