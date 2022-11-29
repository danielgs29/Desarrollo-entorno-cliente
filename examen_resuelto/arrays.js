/* ----------------------------------------------------------------------- */
// Ejercicio 2.1
/* ----------------------------------------------------------------------- */

function array_slice_especial(array, inicio, fin) {
    let resultado = [];

    for (let indice in array) {
        // hemos empezado?
        if (indice < inicio) continue;

        // hemos terminado?
        if (indice >= fin) break;

        resultado[indice] = array[indice];
    } // for indice

    return resultado;
} // array_slice_especial

/* ----------------------------------------------------------------------- */
// Ejercicio 2.2
/* ----------------------------------------------------------------------- */

/*
Descripción de la funcion Array.slice():

>> Definition and Usage
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

>> Syntax
array.slice(start, end)

>> Parameters
start	Optional.
    Start position. Default is 0.
    Negative numbers select from the end of the array.
end	Optional.
    End position. Default is last element.
    Negative numbers select from the end of the array.

Extraído de https://www.w3schools.com/jsref/jsref_slice_array.asp
Copyright 1999-2022 by Refsnes Data. All Rights Reserved.
*/

function array_slice_especial2(array, inicio, fin) {
    if (!Array.isArray(array)) return  [];

    if (inicio < 0) inicio += array.length;
    if (fin < 0) fin += array.length;

    return array_slice_especial(array, inicio, fin);
} // array_slice_especial2

/* ----------------------------------------------------------------------- */
// Ejercicio 2.3: versión compacta
/* ----------------------------------------------------------------------- */

// versión utilizando expresiones lamba (funciones "flecha" / arrow function)

function array_estadisticas(array) {
    let resultado = [undefined, undefined, undefined, undefined];

    if (!Array.isArray(array)) return resultado;

    // contar elementos
    resultado[0] = array.reduce((previo) => previo + 1, 0);

    // sumar elementos
    resultado[1] = array.reduce((previo, valor) => previo + valor, 0);

    if (resultado[0] == 0) return resultado;

    // mínimo
    resultado[2] = array.reduce((previo, valor) => Math.min(previo, valor), Infinity);

    // máximo
    resultado[3] = array.reduce((previo, valor) => Math.max(previo, valor), -Infinity);

    return resultado;
} // array_estadisticas

// versión utilizando funciones anónimas (anonymous functions)

function array_estadisticas_version_alternativa(array) {
    let resultado = [undefined, undefined, undefined, undefined];

    // contar elementos
    resultado[0] = array.reduce(function (previo) {
        return previo + 1;
    },
        0);

    // sumar elementos
    resultado[1] = array.reduce(function (previo, valor) {
        return previo + valor;
    },
        0);

    if (resultado[0] == 0) return resultado;

    // mínimo
    resultado[2] = array.reduce(function (previo, valor) {
        return Math.min(previo, valor);
    },
        Infinity);

    // máximo
    resultado[3] = array.reduce(function (previo, valor) {
        return Math.max(previo, valor);
    },
        -Infinity);

    return resultado;
} // array_estadisticas_version_alternativa

/* ----------------------------------------------------------------------- */
// Ejercicio 2.3: versión alternativa "tradicional"
/* ----------------------------------------------------------------------- */

function callback_array_estadisticas_cuenta(previo) {
    return previo + 1;
} // callback_array_estadisticas_cuenta

function callback_array_estadisticas_suma(previo, valor) {
    return previo + valor;
} // callback_array_estadisticas_suma

function callback_array_estadisticas_minimo(previo, valor) {
    return Math.min(previo, valor);
} // callback_array_estadisticas_minimo

function callback_array_estadisticas_maximo(previo, valor) {
    return Math.min(previo, valor);
} // callback_array_estadisticas_maximo

function array_estadisticas_version_alternativa_compleja(array) {
    let resultado = [undefined, undefined, undefined, undefined];

    // contar elementos
    resultado[0] = array.reduce(callback_array_estadisticas_cuenta, 0);

    // sumar elementos
    resultado[1] = array.reduce(callback_array_estadisticas_suma, 0);

    if (resultado[0] == 0) return resultado;

    // mínimo
    resultado[2] = array.reduce(callback_array_estadisticas_minimo, Infinity);

    // máximo
    resultado[3] = array.reduce(callback_array_estadisticas_maximo, -Infinity);

    return resultado;
} // array_estadisticas_version_alternativa_compleja
