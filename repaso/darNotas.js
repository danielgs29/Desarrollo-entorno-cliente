function decirNota(nota){

    if(Number.isNaN(nota) || (nota<0)){
        notafinal=Error;
    }
    let notafinal="";
    if(nota>=0 && nota<3){
        notafinal="muy deficiente"
    }
    else if(nota>=3 && nota<5){
        notafinal="insuficiente"
    }
    else if(nota>=5 && nota<6){
        notafinal="suficiente"
    }
    else if(nota>=6 && nota<7){
        notafinal="bien"
    }
    else if(nota>=7 && nota<8){
        notafinal="notable"
    }
    else if(nota>=8 && nota<11){
        notafinal="sobresaliente"
    }
  alert(notafinal);
    
}

function decirNota2(nota){
    if(nota<3) return "muy deficiente";
    if(nota<5) return "insuficiente";
    if(nota<6) return "suficiente";
    if(nota<7) return "bien";
    if(nota<9) return "notable";
    if(nota<10) return "sobresaliente";
    if(nota==10) return "mencion honorifica";
}

decirNota(4.7);