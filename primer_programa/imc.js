/*
Tabla de constantes:
IMC_DELGADEZ_SEVERA IMC < 16,00
IMC_DELGADEZ_MODERADA IMC < 16,99
IMC_DELGADEZ_LEVEL  IMC < 18,5
IMC_NORMAL IMC < 25
IMC_PREOBESIDAD IMC < 30
IMC_OBESIDAD_LEVE < 35
IMC_OBESIDAD_MEDIA < 40
IMC_OBESIDAD_MORBIDA >= 40
*/


function calculaIMC(peso,altura){
let imc;
let alturaMetros;

peso = Number(peso);
altura=Number(altura);

//validamos que no sea numeros
if(isNaN(peso) || isNaN(altura)){
    return NaN;
}

//validamos que no sea menor que cero
if((peso<=0) || (altura <=0)){
    return NaN;
}

alturaMetros=altura/100;
imc=(peso)/(alturaMetros*alturaMetros);

return imc;
}

function calcularSituacion(indice){
    let situacion;
    if(indice<16.00){
        situacion= "Delgadez Severa";
    }
    if(indice<16.99 && indice >16.00){
        situacion= "Delgadez Moderada";
    }
    if(indice<18.05 && indice >16.99){
        situacion= "Delgadez leve";
    }
    if(indice<25 && indice >18.05){
        situacion= "Normal";
    }
    if(indice<35 && indice >25){
        situacion= "Obesidad Leve";
    }
    if(indice<40 && indice >35){
        situacion= "Obesidad Media";
    }
    if(indice>40){
        situacion= "Obesidad Morbida";
    }

    return situacion;
}


let peso = prompt("Dime tu peso en kilos");
let altura = prompt("Dime tu altura en centimetros");

let imc =calculaIMC(peso,altura);
let situ=calcularSituacion(imc);

if(isNaN(imc)){
    alert("Alguno de los datos es incorrecto");
}else{
    alert("tu imc es "+ imc + " "+situ);
}