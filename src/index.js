const cipherButton = document.getElementById("boton-cipher");
cipherButton.addEventListener("click", function () {
    let cipherText = document.getElementById("cipher-box-encode").value;
    let cipherOffset = document.getElementById("offset-encode").value;
    document.getElementById("text-encode").innerHTML = window.cipher.encode(cipherText, cipherOffset);
});

const cipherButtonD = document.getElementById("boton-decode");
 cipherButtonD.addEventListener("click", function () {
  let cipherTextD = document.getElementById("cipher-box-decode").value;
  let cipherOffset = document.getElementById("offset-decode").value;
  document.getElementById("text-decode").innerHTML = window.cipher.decode(cipherTextD, cipherOffset);

 });




