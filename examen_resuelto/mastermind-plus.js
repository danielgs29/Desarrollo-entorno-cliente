"use strict";

let configuracion_minimo;
let configuracion_maximo;
let configuracion_casillas;
let mastermind_numeros;
let numero_jugada = 0;

/* ----------------------------------------------------------------------- */
/* Configuración del juego                                                 */
/* ----------------------------------------------------------------------- */

function obtener_configuracion() {
    let valor_minimo = window.document.getElementById("input_numero_minimo").value;
    let valor_maximo = window.document.getElementById("input_numero_maximo").value;
    let valor_casillas = window.document.getElementById("input_casillas").value;

    let minimo = Math.trunc(Number(valor_minimo));
    let maximo = Math.trunc(Number(valor_maximo));
    let casillas = Math.trunc(Number(valor_casillas));

    if (valor_minimo == "") minimo = NaN;
    if (valor_maximo == "") maximo = NaN;
    if (valor_casillas == "") casillas = NaN;

    // validamos que sean números
    if (isNaN(minimo) || isNaN(maximo) || isNaN(casillas)) {
        alert("Alguno de los valores introducidos no es un número");
        return false;
    } // if

    // validamos
    if (casillas < 1) {
        alert("El número de casillas tiene que ser mayor de 0");
        return false;
    }

    if (minimo > maximo) {
        alert("El mínimo es mayor que el máximo");
        return false;
    } // if

    let rango = (maximo - minimo) + 1;
    if (rango < casillas) {
        alert("El rango es menor que el número de casillas");
        return false;
    } // if

    // guardamos la configuración
    configuracion_minimo = minimo;
    configuracion_maximo = maximo;
    configuracion_casillas = casillas;

    return true;
} // obtener_configuracion

function crear_formulario_jugada(casillas) {
    let form = window.document.createElement("form");

    let texto = window.document.createElement("span");
    texto.textContent = "Jugada: ";
    form.append(texto);

    for (let i = 1; i <= configuracion_casillas; i++) {
        let input = window.document.createElement("input");
        input.type = "text";
        input.size = "3";
        input.id = `input_jugada_${i}`;

        form.append(input);

        // opcional, para mejorar la apariencia
        let span = window.document.createElement("span");
        span.textContent = " ";
        form.append(span);
    } // for

    let boton = window.document.createElement("button");
    boton.type = "button";
    boton.id = "boton_enviar_jugada";
    boton.textContent = "Enviar jugada";
    boton.onclick = on_boton_enviar_jugada_click;
    form.append(boton);

    window.document.body.append(form);
} // crear_formulario_jugada

function numero_aleatorio(inicio, fin) {
    let rango = (fin - inicio) + 1;
    let r = Math.random();

    return Math.trunc(r * rango) + inicio;
} // numero_aleatorio

function obtener_numeros_aleatorios(minimo, maximo, cantidad) {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        let numero;
        let repetido;

        do {
            numero = numero_aleatorio(minimo, maximo);

            // está repetido?
            repetido = false;
            for (let j = 0; j < i; j++) {
                if (numeros[j] == numero) {
                    repetido = true;
                    break;
                } // if
            } // for j
        } while (repetido);

        numeros[i] = numero;
    } // for i

    return numeros;
} // obtener_numeros_aleatorios

function on_boton_empezar_click() {
    if (!obtener_configuracion()) return;

    crear_formulario_jugada(configuracion_casillas);

    mastermind_numeros = obtener_numeros_aleatorios(configuracion_minimo, configuracion_maximo, configuracion_casillas);

    // inhabilitar botón de empezar
    let boton = window.document.getElementById("boton_empezar");
    boton.disabled = "disabled";
} // on_boton_empezar_click

/* ----------------------------------------------------------------------- */
/* Juego                                                                   */
/* ----------------------------------------------------------------------- */

function obtener_jugada() {
    let jugada = [];

    for (let i = 1; i <= configuracion_casillas; i++) {
        let entrada = window.document.getElementById(`input_jugada_${i}`).value;
        let valor = Math.trunc(Number(entrada));
        if ((entrada == "") || (valor < configuracion_minimo) || (valor > configuracion_maximo)) {
            valor = NaN;
        } // if

        jugada.push(valor);
    } // for

    return jugada;
} // obtener_jugada

function crear_tabla_jugadas() {
    if (numero_jugada != 1) return;

    let tabla = window.document.createElement("table");
    tabla.id = "tabla-jugadas";

    let cabecera = window.document.createElement("thead");
    let fila = window.document.createElement("tr")

    let celda = window.document.createElement("th");
    celda.textContent = "#";
    fila.append(celda);

    for (let i = 1; i <= configuracion_casillas; i++) {
        let celda = window.document.createElement("th");
        celda.textContent = `${i}`;
        fila.append(celda);
    } // for

    cabecera.append(fila);
    tabla.append(cabecera);

    window.document.body.append(tabla);
} // crear_tabla_jugadas

function mostrar_jugada(jugada, numeros) {
    crear_tabla_jugadas();

    let tabla = window.document.getElementById("tabla-jugadas");
    let fila = window.document.createElement("tr");

    // número de jugada
    let celda = window.document.createElement("td");
    celda.textContent = `${numero_jugada}`;
    fila.append(celda);

    // "análisis" de la jugada
    for (let indice in jugada) {
        let celda = window.document.createElement("td");

        // es error?
        if (isNaN(jugada[indice])) {
            celda.textContent = "??";
            celda.className = "resultado-nan";
        }
        else {
            celda.textContent = `${jugada[indice]}`;

            // acierto?
            if (jugada[indice] == numeros[indice]) {
                celda.className = "resultado-acierto";
            }
            else {
                // asumimos fallo, hasta que se demuestre lo contrario
                celda.className = "resultado-fallo";

                // comparamos la jugada con todos los números a adivinar
                for (let indice_numeros in numeros) {
                    if (jugada[indice] == numeros[indice_numeros]) {
                        celda.className = "resultado-parcial";
                        break;
                    } // if
                } // 
            } // if-else
        } // if-else

        fila.append(celda);
    } // for

    tabla.append(fila);
} // mostrar_jugada

function verificar_ha_ganado(jugada, mastermind_numeros) {
    let aciertos = 0;

    for (let i in jugada) {
        if (jugada[i] == mastermind_numeros[i]) aciertos++;
    } // for

    // asumimos un array sin "huecos"
    return (aciertos == jugada.length);
} // verificar_ha_ganado

function mostrar_ha_ganado() {
    // mostrar felicitación
    let felicitacion = window.document.createElement("div");
    felicitacion.textContent = "¡Enhorabuena! Has acertado";
    felicitacion.className = "enhorabuena";
    window.document.body.append(felicitacion);

    // inhabilitar botón de enviar jugada
    let boton = window.document.getElementById("boton_enviar_jugada");
    boton.disabled = "disabled";
} // mostrar_ha_ganado

function on_boton_enviar_jugada_click() {
    //incrementamos el número de juagada
    numero_jugada++;

    // obtenemos la jugada, la analizamos y la mostramos
    let jugada = obtener_jugada();
    mostrar_jugada(jugada, mastermind_numeros);

    // ha ganado?
    if (verificar_ha_ganado(jugada, mastermind_numeros)) {
        mostrar_ha_ganado();
    } // if
} // on_boton_enviar_jugada_click
