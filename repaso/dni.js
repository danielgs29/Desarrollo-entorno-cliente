function letra_dni(dni){

    const LETRA_DNI="TRWAGMYFPDXBNJZSQVHLCKE";

    dni=Number(dni);
    if(Number.isNaN(dni)|| (dni<0)|| (dni>99999999)){
        return "?";
    }

    return LETRA_DNI.charAt(dni % 23);
    
}

