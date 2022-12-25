/**
 * @param {any} numA
 * @param {any} numB
 * @param {any} numC
 * @return {number}
 */
function fecha_mas_cercana(numA, numB, numC){
    if(isNaN(numA)||isNaN(numB)||isNaN(numC)){
        return NaN;
    }
    if(numA==0||numB==0||numC==0){
        return NaN;
    }
    if(numA<-10000 ||numC>10000){
        return NaN;
    }
    if(numA>=numB||numA>=numC){
        return NaN;
    }
    if(numC<=numA||numC<=numB){
        return NaN;
    }

    let valor=distancia_fechas(numA,numB,numC);

    return valor

}

function distancia_fechas(numA, numB, numC){

    let calculo1= numB-numA;
    let calculo2= numC-numB;

    if(numC>0 && numB<0){
        calculo2-=1
    }
    if(numB>0 && numA<0){
        calculo1-=1;
    }
    if(calculo1<calculo2){
        return numA
    }
    else if(calculo2<calculo1){
        return numC
    }
    else{
        return 0;
    }
}


