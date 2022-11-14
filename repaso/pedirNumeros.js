
function numeros(){
    let introducido=0;
    let cuenta=0;
    let total=0;
    let parra=document.getElementById("total");
    let parrafo=parra.value;

    do{
    introducido=prompt("introduce un numero");

    if (isNaN(introducido)){
        while(isNaN(introducido)){
            introducido=prompt("error por favor introduzca un numero")
        }
    }

    total+=introducido;
    cuenta++; console.log(cuenta);
    parra.innerText=total;
    }while(introducido!=null);

}

numeros();