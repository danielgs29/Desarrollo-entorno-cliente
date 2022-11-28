//Elimina el elemento del array en la posición indicada por índice, "moviendo" el resto de índices para no dejar "hueco"
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

//Elimina tantos elementos del array como indique numero empezando en la posición indicada por índice, "moviendo" el resto de índices para no dejar "huecos"
function array_eliminar_elementos(array, indice, numero) {

    if (!(array instanceof Array)) return;
    if (indice < 0 || indice >= array.length) return;
    if (numero < 0 || numero >= array.length) return;

    for (let k = 0; k < numero; k++) {
        for (let i = indice; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
    }

    array.length -= numero;
    
    return array;

} 

//Inserta el elemento en la posición indicada en indice, "moviendo" previamente el resto de los elementos para hacer "hueco"

function inserta_elemento_array(array2, posicion,elemento){
    if(!(array2 instanceof Array)) return;
     // esta en los limites del array
     if((posicion<0)||(posicion >=array.length)) return;
 

    array2.length+=1;
    //mueve los elementos
    for(let i=posicion; i<array2.length-1; i++){
        array2[i+1]=array2[i];
        array2[posicion]=elemento;
    }
    return array2;
}

//Inserta los elementos del array_elementos en la posición indicada en indice, "moviendo" previamente el resto de los elementos para hacer "hueco"
function array_insertar_elementos(array, indice, array_elementos) {

    if (!(array instanceof Array)) return;
    if (indice < 0 || indice >= array.length) return;
    if (!(array_elementos instanceof Array)) return;

    //Creamos una nueva varible de tipo number con el numero de elemntos que tenga array_elementos previamente introducido por el usuario. Hacemos "hueco" al final del array 
    let num_elementos = array_elementos.length;
    array.length += num_elementos;

    for (let i = num_elementos - 1; i >= 0; i--) {
        for (let i = array.length - 1; i > indice; i--) {
            array[i] = array[i - 1];

        }
        array[indice] = array_elementos[i];
    }
    //Devolvemos el array
    return array

}