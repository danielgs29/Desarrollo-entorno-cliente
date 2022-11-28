/*
Escribe una función, convertir_array_tabla, que "convierta" un array
en una tabla HTML. La función devolverá un elemento HTML
*/

function convertir_array_tabla(array, columnas) {
    let tabla = window.document.createElement("table");

    if (!Array.isArray(array) || (columnas < 0)) {
        return tabla;
    } // if

    let longitud = array.length;
    let filas = Math.ceil(array.length / columnas);

    let cuerpo_tabla = window.document.createElement("tbody");
    let indice = 0;

    for (let fila = 0; fila < filas; fila++) {
        let fila_tabla = window.document.createElement("tr");

        for (let columna = 0; columna < columnas; columna++, indice++) {
            if (indice >= longitud ) {
                break;
            };

            let celda = window.document.createElement("td");

            celda.textContent = String(array[indice]);
            fila_tabla.append(celda);
        } // for columna

        cuerpo_tabla.append(fila_tabla);
    } // for fila

    tabla.append(cuerpo_tabla);

    return tabla;
} // convertir_array_tabla
