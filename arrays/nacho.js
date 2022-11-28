function array_eliminar_elementos(array, indice, numero) {

    //Comprobamos que es un array y que los parámetros están dentro de rango
    if (!(array instanceof Array)) return;
    if (indice < 0 || indice >= array.length) return;
    if (numero < 0 || numero >= array.length) return;

    //Bucle for para mover los elementos
    for (let k = 0; k < numero; k++) {
        for (let i = indice; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
    }
    //Truncamos el array
    array.length -= numero;
    //Devolvemos el array.
    return array;

}  //fin function

array=[1,2,3,4,5];
array_eliminar_elementos(array,1,2);
console.log(array);
