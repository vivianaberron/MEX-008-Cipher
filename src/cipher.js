window.cipher = {
  encode: (number, string ) =>{
    //recibiendo mensaje
    let cipherEncode = ''; //Contiene la palabra a cifrar
    for (let i = 0; i < string.length ;i++){
       let newAscii = string.charCodeAt(i); //Recorriendo caracteres
      let cipherAscii = (newAscii-65+number)%26+65; //aplicando fórmula de cifrado
        let cipherLetter = (String.fromCharCode (cipherAscii));
        cipherEncode = cipherEncode + cipherLetter;
      }
     return cipherEncode
    },
   

 decode: (string, number) => {
   //recibiendo mensaje
     let boxDecode = ''; //Contiene la palabra a descifrar 
        for (let i = 0; i< string.length;i++){
          let newAsciiDecode = string.charCodeAt(i);
           let cipherAsciiDecode = (newAscii+65-number+52)%26+65;
            let cipherLetterD = (String.fromCharCode (cipherAscii));
           boxDecode = boxDecode + cipherLetter;
        }
        return boxDecode
      } 


  









  }
  