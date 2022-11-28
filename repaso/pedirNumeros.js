window.onload=numeros;

function numeros(){
    let introducido=0;
    let cuenta=0;
    let total=0;
    let parrafo=document.getElementById("total");
    console.log(parrafo);

    do{
    introducido=prompt("introduce un numero");

    if (isNaN(introducido)){
        while(isNaN(introducido)){
            introducido=prompt("error por favor introduzca un numero")
        }
    }

    total+=introducido;
    cuenta++;
    parrafo.innerText=total;
    console.log(total);
    }while(introducido!=null);

   

}

numeros();