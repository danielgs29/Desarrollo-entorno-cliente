/**
 * @param {number} bloques
 * @param {number} huecos
 * @returns {number}
 */
function altura_maxima_piramide(bloques, huecos){
    let niveles=0;
    let factor=1;
    let fin=false;
    let necesarios=0;

    if(isNaN(huecos)|| isNaN(bloques)){
        return;
    }
    if(bloques <1 || bloques>2000000000){
        return;
    }
    if(huecos<0 || huecos>50){
        return;
    }

    huecos=huecos/100;

    while(fin==false){

        necesarios=factor*factor;

        let  quitar=Math.floor(necesarios*huecos);

        if(necesarios!=1){
            if(quitar<necesarios) {
                necesarios-=quitar
            }
        }
       
        if(necesarios<=bloques){
            niveles+=1;
            bloques-=necesarios
        }
    
        if(necesarios>bloques){
            fin=true
        }
        factor+=2;
    }
    return niveles;
}

console.log(altura_maxima_piramide(19,50));

