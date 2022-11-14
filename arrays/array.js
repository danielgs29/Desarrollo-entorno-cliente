function on_body_load(){
    var array= [1,5];
    var array2= [1,2,3];
    var  elemento=7;

    function borrar(valor,array){
        var indice = array.indexOf(valor); // obtenemos el indice
        array.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
        //console.log( array);
    }

    borrar(5,array);
    array2=inserta_elemento_array(array2,2,elemento);
    console.log(array2);
}


function elimina_elemento_array(array, posicion){
    if(!(array instanceof Array)) return;

    // esta en los limites del array
    if((posicion<0)||(posicion >=array.length)) return;

    //mueve los elementos
    for(let i=posicion; i<array.length-1; i++){
        array[i]=array[i+1];
    }

    array.length-=1;
    //corta el array
}

function inserta_elemento_array(array2, posicion,elemento){
    if(!(array2 instanceof Array)) return;

    array2.length+=1;
    //mueve los elementos
    for(let i=posicion; i<array2.length-1; i++){
        array2[i+1]=array2[i];
    }

    array2[posicion]=elemento;

    return array2;
}