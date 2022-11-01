let VALOR_MINIMO, VALOR_MAXIMO, texto_error, datos_correctos, intento_adivinar, maximo, minimo, aleatorio, guardado, contador=0;
let seleccionado_radio;

function datos(){
         VALOR_MINIMO=document.getElementById("campo_minimo");
         VALOR_MAXIMO=document.getElementById("campo_maximo");
         texto_error = document.getElementById("error_datos");
         datos_correctos = document.getElementById("datos_correctos");
         intento_adivinar = document.getElementById("intento");
         maximo = VALOR_MAXIMO.value;
         minimo = VALOR_MINIMO.value;

         if(isNaN(maximo)||isNaN(minimo)){
            texto_error.style="";
        }else{
            jugar(maximo,minimo);
            texto_error.style="display:none;" 
        }
 }
        function jugar(maximo, minimo){
            if(contador>0){
                if(seleccionado_radio=="mayor"){
                    minimo=Number(guardado)+1;
                    aleatorio =  Math.floor(Math.random() * (maximo - minimo+1) + minimo);
                    datos_correctos.style="";
                    intento_adivinar.innerText=aleatorio;
                }else{
                    if(seleccionado_radio=="menor");
                     maximo=Number(guardado)-1;
                     aleatorio =  Math.floor(Math.random() * (maximo - minimo +1) + minimo);
                     datos_correctos.style="";
                     intento_adivinar.innerText=aleatorio;
                }
            }else{
                aleatorio =  Math.floor(Math.random() * (maximo - minimo+1) + minimo);
                datos_correctos.style="";
                intento_adivinar.innerText=aleatorio;
                contador++;
            }
            document.getElementById("respuesta").onclick = function() {
                let seleccionado = document.querySelector('input[type=radio][name=respuesta]:checked');
                seleccionado_radio = seleccionado.value;
                guardado=aleatorio;
        
                if(seleccionado_radio=="Correcto"){
                    let acierto = document.getElementById("acertado");
                    acierto.style="";
                }else{
                    jugar(maximo,minimo);
                }
            }
            }
          
            
