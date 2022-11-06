<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="scripts/new_nodes.js"></script>
    </head>
    <body>
        <input type="button" value="Añadir" onclick="on_boton_click()">
        <div id="zona_resultados"></div>
    </body>
</html>




const HTMLID_ZONA_RESULTADOS = "zona_resultados";
let cuenta = 0;

function on_boton_click() {
    let zona_resultados = window.document.getElementById(HTMLID_ZONA_RESULTADOS);
    zona_resultados.textContent = "";

    let cuenta_veces = window.document.createElement("h2");
    cuenta_veces.textContent = String(++cuenta);
    zona_resultados.append(cuenta_veces);

    for (let i=0;i<10;i++) {
        let nuevo_div = window.document.createElement("div");

        nuevo_div.style = "font-size: " + (i + 10) + "pt";
        nuevo_div.textContent = "Tamaño de letra " + (i + 10);

        zona_resultados.appendChild(nuevo_div);