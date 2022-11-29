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



function array_insertar_elementos(array, indice, array_elementos) {

    //Comprobamos que son arrays y que los parámetros están dentro de rango
    if (!(array instanceof Array)) return;
    if (indice < 0 || indice >= array.length) return;
    if (!(array instanceof Array)) return;

    //Creamos una nueva varible de tipo number con el numero de elemntos que tenga array_elementos previamente introducido por el usuario. Hacemos "hueco" al final del array 
    let num_elementos = array_elementos.length;
    array.length += num_elementos;

    //Bucle for para distribuir el "hueco" dentro del array y luego meter los datos de array_elementos en el lugar indicado
    for (let i = num_elementos - 1; i >= 0; i--) {
        for (let i = array.length - 1; i > indice; i--) {
            array[i] = array[i - 1];

        }
        array[indice] = array_elementos[i];
    }
    //Devolvemos el array
    return array

}

array=[1,2,3,4,5];
array_eliminar_elementos(array,1,3);
console.log(array);
