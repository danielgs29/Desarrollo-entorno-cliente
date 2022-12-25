/**
 * @param {number} numero 
 * @returns {string}
 */
function numeros_jeroglificos(numero){
    let cadena="";
    if(numero<1||numero>9999999|| isNaN(numero)){
        return cadena;
    }
        while (numero>=1000000){
          cadena+="H";
          numero-=1000000;
        }
        while (numero>=100000){
            cadena+="R";;
            numero-=100000;
        }
        while (numero>=10000){
            cadena+="D";
            numero-=10000;
        }
        while (numero>=1000){
             cadena+="F";
             numero-=1000;
        }
        while(numero>=100){
             cadena+="C";
             numero-=100;
        }
        while(numero>=10){
             cadena+="G";
             numero-=10;
        }
        while(numero>=1){
             cadena+="T";
             numero-=1;
        }
        return cadena;
}
