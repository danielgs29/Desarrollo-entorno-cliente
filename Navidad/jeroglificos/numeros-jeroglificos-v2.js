/**
 * @param {number} numero 
 * @returns {{numero: number, simbolico: string, jeroglifico: string}}
 */
function numeros_jeroglificos_v2(numero){
    if(numero<1||numero>9999999|| isNaN(numero)){
        return "";
    }

    let numeroObjeto ={
        numero:numero,
        simbolico:"",
        jeroglifico:""
    };

    while (numero>=1000000){
        numeroObjeto.simbolico+="H";
        numero-=1000000;
        numeroObjeto.jeroglifico+='\u{13068}'
      }
      while (numero>=100000){
        numeroObjeto.simbolico+="R";;
          numero-=100000;
        numeroObjeto.jeroglifico+='\u{13190}'
      }
      while (numero>=10000){
        numeroObjeto.simbolico+="D";
          numero-=10000;
          numeroObjeto.jeroglifico+='\u{130AD}'
      }
      while (numero>=1000){
        numeroObjeto.simbolico+="F";
        numero-=1000;
        numeroObjeto.jeroglifico+='\u{131BC}'
      }
      while(numero>=100){
        numeroObjeto.simbolico+="C";
           numero-=100;
        numeroObjeto.jeroglifico+='\u{13362}'
      }
      while(numero>=10){
        numeroObjeto.simbolico+="G";
        numero-=10;
        numeroObjeto.jeroglifico+='\u{13386}'
      }
      while(numero>=1){
           numeroObjeto.simbolico+="T";
           numero-=1;
           numeroObjeto.jeroglifico+='\u{133E4}'

      }
      
    return numeroObjeto;
    
}