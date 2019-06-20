window.cipher = {
  encode: (number, string ) =>{
    //recibiendo mensaje
    let cipherEncode = ''; //Contiene la palabra a cifrar
    for (let i = 0; i < string.length; i++) { //Recorriendo caracteres
       let newAscii = string.charCodeAt(i); 
       if (newAscii >= 65 && newAscii <= 90){
        let cipherAscii = (newAscii - 65 + number) % 26 + 65; //aplicando fórmula de cifrado
        let cipherLetter = (String.fromCharCode (cipherAscii));
        cipherEncode = cipherEncode + cipherLetter;
      } else if  (newAscii >= 97 && newAscii <= 122){
        let cipherAscii = (newAscii - 97 + number) % 26 + 97; //aplicando fórmula de cifrado
        let cipherLetter = (String.fromCharCode (cipherAscii));
        cipherEncode = cipherEncode + cipherLetter;
      } else {
        cipherEncode = cipherEncode + string[i];
      }
    }
     return cipherEncode;
    },
   

 decode: (number, string) => {
   //recibiendo mensaje
     let cipherDecode = ''; //Contiene la palabra a descifrar 
        for (let i = 0; i < string.length;i++){
          let newAscii = string.charCodeAt(i);
          if (newAscii >= 65 && newAscii <=90){
           let cipherAsciiDecode = (newAscii-65-number+52)%26+65;
            let cipherLetterD = (String.fromCharCode (cipherAsciiDecode));
           cipherDecode = cipherDecode + cipherLetterD;
          } else if (newAscii >= 67 && newAscii <=122) {
            let cipherAsciiDecode = (newAscii-97-number+52)%26+97;
             let cipherLetterD = (String.fromCharCode (cipherAsciiDecode));
            cipherDecode = cipherDecode + cipherLetterD;
           } else {
          cipherDecode = cipherDecode + string[i];
        }
      }
        return cipherDecode;
    }
  };