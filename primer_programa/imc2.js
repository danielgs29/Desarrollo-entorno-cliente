const IMC_DELGADEZ_SEVERA = 16.00;
const IMC_DELGADEZ_MODERADA = 17;
const IMC_DELGADEZ_LEVE = 18.5;
const IMC_NORMAL = 25;
const IMC_PREOBESIDAD = 30
const IMC_OBESIDAD_LEVE = 35;
const IMC_OBESIDAD_MEDIA = 40;
const IMC_OBESIDAD_MORBIDA = 41;
 
function calculaImc(peso, altura) {
    let imc;
    let alturaMetros;
 
    peso = Number(peso);
    altura = Number(altura);
 
    // validamos que son números
    if (isNaN(peso) || isNaN(altura)) {
        return NaN;
    } // if
 
    // validamos el rango
    if ((peso <= 0) || (altura <= 0)) {
        return NaN;
    } // if
 
    alturaMetros = altura / 100;
    imc = (peso) / (alturaMetros * alturaMetros);
 
    return imc;
} // calculaIMC
 
function calculaTipoImc(imc) {
    if (Number.isNaN(imc)) return NaN;
 
    if (imc < IMC_DELGADEZ_SEVERA) return IMC_DELGADEZ_SEVERA;
    else if (imc < IMC_DELGADEZ_MODERADA) return IMC_DELGADEZ_MODERADA;
    else if (imc < IMC_DELGADEZ_LEVE) return IMC_DELGADEZ_LEVE;
    else if (imc < IMC_NORMAL) return IMC_NORMAL;
    else if (imc < IMC_PREOBESIDAD) return IMC_PREOBESIDAD;
    else if (imc < IMC_OBESIDAD_LEVE) return IMC_OBESIDAD_LEVE;
    else if (imc < IMC_OBESIDAD_MEDIA) return IMC_OBESIDAD_MEDIA;
    else return IMC_OBESIDAD_MORBIDA;
} // calculaTipoImc
 
/// 
function opinionMedicaImc(tipoImc) {
    switch (Number(tipoImc)) {
        case IMC_DELGADEZ_SEVERA: return "Delgadez severa";
        case IMC_DELGADEZ_MODERADA: return "Delgadez moderada";
        case IMC_DELGADEZ_LEVE: return "Delgadez leve";
        case IMC_NORMAL: return "Normal";
        case IMC_PREOBESIDAD: return "Preobesidad";
        case IMC_OBESIDAD_LEVE: return "Obesidad leve";
        case IMC_OBESIDAD_MEDIA: return "Obesidad media";
        case IMC_OBESIDAD_MORBIDA: return "Obesidad mórbida";
 
        default: return "Desconocida";
    } // switch
} // opinionMedicaImc
 
const HTMLID_CAMPO_IMC_PESO = "campo_peso";
 
function on_button_calcular_click() {
    /** @type {HTMLInputElement} */
    let campo_peso = document.getElementById(HTMLID_CAMPO_IMC_PESO);
    let campo_altura = document.getElementById("campo_altura");
    let zona_presentacion_resultados = document.getElementById("zona_resultado_calculo");
    let texto_error = document.getElementById("error_datos");
    let zona_resultado_correcto = document.getElementById("datos_correctos");
 
    let peso = campo_peso.value;
    let altura = campo_altura.value;
 
    let imc = calculaImc(peso, altura);
 
    zona_presentacion_resultados.style = "";
    if (isNaN(imc)) {
        texto_error.style="";
        zona_resultado_correcto.style = "display: none";
    }
    else {
        let tipoImc = calculaTipoImc(imc);
        let opinion = opinionMedicaImc(tipoImc);
 
        texto_error.style="display: none";
        zona_resultado_correcto.style = "";
 
        label_imc = document.getElementById("label_imc");
        label_opinion = document.getElementById("label_opinion");
 
        label_imc.innerText = String(imc);
        label_opinion.innerText = opinion;
    } // if-else
} // on_button_calcular_click