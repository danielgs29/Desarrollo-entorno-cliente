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
   //trunca lo introducido
    let maximo = Math.floor(Number(valor_maximo));
    let minimo = Math.floor(Number(valor_minimo));
    let casillas = Math.floor(Number(valor_casillas));
    
    if (isNaN(minimo) || isNaN(maximo) || isNaN(casillas)) {
        alert("Apor favor introduzca solo numeros");
        return false;
    }
    if (minimo > maximo) {
        alert("El mínimo es mayor que el máximo");
        return false;
    }
    if (casillas < 1) {
        alert("las casillas no pueden ser 0");
        return false;
    }
    // si todo es correcto lo asigna
    configuracion_maximo = maximo;
    configuracion_casillas = casillas;
    configuracion_minimo = minimo;

    return true;

} 

function crear_formulario_jugada(configuracion_casillas) {
    let form = window.document.createElement("form");
    let texto = window.document.createElement("span");
    texto.textContent = "Jugada: ";
    form.append(texto);

    for (let i = 1; i <= configuracion_casillas; i++) {
        let input = window.document.createElement("input");
        input.type = "text";
        input.id = "intento"+String(i);
        form.append(input);
    }
    let boton = window.document.createElement("button");
    boton.type = "button";
    boton.id = "boton_enviar_jugada";
    boton.textContent = "Enviar Intento";
    boton.onclick = on_boton_enviar_jugada_click;
    form.append(boton);
    window.document.body.append(form);
} 

function numero_aleatorio(inicio, fin) {
    let generado = Math.floor(Math.random()*(fin-inicio)+inicio);
    return generado
} 

function obtener_numeros_aleatorios(minimo, maximo, cantidad) {
    let generados = [];
    for (let i = 0; i < cantidad; i++) {
        let esta = false;
        let generado;
        do {
        generado = numero_aleatorio(minimo, maximo);
        for (let j = 0; j < i; j++) {
         if (generados[j] == generado) {
                 esta = true;
                    break;
                } 
            }
        } while (esta);
        generados[i] = generado;
    }
    return generados;
} 

function on_boton_empezar_click() {   //1
    if(!obtener_configuracion()) return;
    crear_formulario_jugada(configuracion_casillas);
    mastermind_numeros = obtener_numeros_aleatorios(configuracion_minimo, configuracion_maximo, configuracion_casillas);
} 

/* ----------------------------+String(i)------------------------------------------- */
/* Juego                                                                   */
/* ----------------------------------------------------------------------- */

function obtener_jugada() {
    let intentos = [];
    for (let i = 1; i <= configuracion_casillas; i++) {
        let introducido = window.document.getElementById("intento"+String(i)).value;
        let numero = Math.floor(Number(introducido));
        if ((numero < configuracion_minimo)  || (introducido == "") || (numero > configuracion_maximo)) {
            numero = NaN;
        }
        intentos.push(numero);
}
return intentos;
}

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
        celda.textContent = String(i);
        fila.append(celda);
    } 
    cabecera.append(fila);
    tabla.append(cabecera);
    window.document.body.append(tabla);
} 

function mostrar_jugada(jugada, numeros) {
    crear_tabla_jugadas();
    let tabla = window.document.getElementById("tabla-jugadas");
    let fila = window.document.createElement("tr");
    let celda = window.document.createElement("td");
    celda.textContent = String(numero_jugada);
    fila.append(celda);
    for (let i in jugada) {
        if (isNaN(jugada[i])) {
            let celda = window.document.createElement("td");
            celda.textContent = "??";
            celda.className = "resultado-nan";
            fila.append(celda);
        }
        else {
            let celda = window.document.createElement("td");
            celda.textContent = String(jugada[i]);
            fila.append(celda);
            if (jugada[i] == numeros[i]) {
                celda.className = "resultado-acierto";
            }
            else {
                celda.className = "resultado-fallo";
                for (let j in numeros) {
                    if (jugada[i] == numeros[j]) {
                        celda.className = "resultado-parcial";
                        break;
                    } 
                }
            }
        }
    }
    tabla.append(fila);
} 

function verificar_ha_ganado(jugada, mastermind_numeros) {
    let aciertos = 0;
    for (let i in jugada) {
        if (jugada[i] == mastermind_numeros[i]) aciertos++;
    } 
    return (aciertos == jugada.length);
}

function mostrar_ha_ganado() {
}

function on_boton_enviar_jugada_click() {
    numero_jugada++;
    let jugada = obtener_jugada();
    mostrar_jugada(jugada, mastermind_numeros);
    if (verificar_ha_ganado(jugada, mastermind_numeros)) {
        mostrar_ha_ganado();
    } 
} 
