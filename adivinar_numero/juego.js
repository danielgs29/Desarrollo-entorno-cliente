const VALOR_MAXIMO =1000; 
// genera el numero aleatoriamente entr uno y milzzzz
let aleatorio =  Math.floor(Math.random() * VALOR_MAXIMO + 1);
let numer=1;
let numer2=""
console.log(Number(numer/numer22))

// funcion que valida si el valor introducido es un numero y si es mayor que cero
function validacion(valor){
   let error=false;
    if(isNaN(valor) || valor<0){
        error=true;
    }  
    return error;
}

//pedimos un número y lo guardamos
let valor_introducido = prompt(" Intenta adivinar un número entre 1 y 1000. Introduzca un numero o 0 En cualquier momento para salir");
let error=validacion(valor_introducido);
let valor_anterior=[];
valor_anterior.push(valor_introducido);

//funcion que ejecuta la logica del juego
function juego(){
    if (valor_introducido==aleatorio){
        window.alert("felicidades ganaste");
        valor_introducido=0
    }
    else{
        if(valor_introducido > aleatorio){
          valor_introducido=prompt("El numero " +valor_anterior[0] + " es mayor introduzca otro");
          valor_anterior[0]=valor_introducido;
          error=validacion(valor_introducido);

        }if(valor_introducido < aleatorio){
           valor_introducido=prompt("El numero " +valor_anterior[0] + " es menor introduzca otro");
           error=validacion(valor_introducido);

 //mientras el dato introducido no sean un numero se mostrara un mensaje de error y se pedira un número
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

//mientras el valor introducido sea diferente de 0 y no haya error se ejecutara el juego
while(valor_introducido != 0  && error==false){
    juego();
}



