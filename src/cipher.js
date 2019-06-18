window.cipher = {
  encode: (number, string ) =>{
    //recibiendo mensaje
    let cipherEncode = ''; //Contiene la palabra a cifrar
    for (let i = 0; i < string.length ;i++){ //Recorriendo caracteres
       let newAscii = string.charCodeAt(i); 
       if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let cipherAscii = (newAscii-65+number)%26+65; //aplicando fórmula de cifrado
        let cipherLetter = (String.fromCharCode (cipherAscii));
        cipherEncode = cipherEncode + cipherLetter;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i)<=122) {
        let cipherAscii = (newAscii-65+number)%26+65; //aplicando fórmula de cifrado
        let cipherLetter = (String.fromCharCode (cipherAscii));
        cipherEncode = cipherEncode + cipherLetter;
      } else {
        cipherEncode = newAscii[i];
      }
    }
     return cipherEncode;
    },
   

 decode: (number, string) => {
   //recibiendo mensaje
     let cipherDecode = ''; //Contiene la palabra a descifrar 
        for (let i = 0; i < string.length;i++){
          console.log(number);
          console.log(string);
          let newAscii = string.charCodeAt(i);
           let cipherAsciiDecode = (newAscii+65-number+52)%26+65;
            let cipherLetterD = (String.fromCharCode (cipherAsciiDecode));
           cipherDecode = cipherDecode + cipherLetterD;
        }
        return cipherDecode
 }


  









  }
  