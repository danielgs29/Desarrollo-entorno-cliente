const VALOR_MAXIMO =1000; 
// genera el numero aleatoriamente entr uno y mil
let aleatorio =  Math.floor(Math.random() * VALOR_MAXIMO + 1);

// funcion que valida si el valor introducido es un numero y si es mayor que cero
function validacion(valor){
   let error=false;
    if(isNaN(valor) || valor<0){
        error=true;
    }  
    return error;
}

let valor_introducido = prompt("Introduce un numero");
let error=validacion(valor_introducido);
let valor_anterior=[];
valor_anterior.push(valor_introducido);

function juego(){
    if (valor_introducido==aleatorio){
        window.alert("felicidades ganaste");
        valor_introducido=0
    }
    else{
        if(valor_introducido > aleatorio){
          valor_introducido=prompt("El numero " +valor_anterior[0] + " es mayor introduce otro");
          valor_anterior[0]=valor_introducido;
          error=validacion(valor_introducido);

        }if(valor_introducido < aleatorio){
           valor_introducido=prompt("El numero " +valor_anterior[0] + " es menor introduce otro");
           error=validacion(valor_introducido);
           
           if(error==false){
            valor_anterior[0]=valor_introducido;
           }else{
            while(error==true){
                valor_introducido=prompt("Error por favor introduzca un numero entre 1 y 1000");
                error=validacion(valor_introducido);
                valor_anterior[0]=valor_introducido;
            }
           }
        }
    }
}

while(valor_introducido != 0  && error==false){
    juego();
}



