/**
 * @param {string} palabra
 * @returns {string[]}
 */
function descomponer_silabas(palabra){
    const silabas = [];
  
    let silabaActual = "";
    let consonantesActuales = "";
  
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra[i];
      const esConsonante = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ".includes(letra);
  
      if (esConsonante) {
        if (consonantesActuales.length > 1) {
          // Si hay más de una consonante seguida, agrega la primera a la sílaba actual y
          // el resto a la próxima sílaba.
          silabaActual += consonantesActuales[0];
          consonantesActuales = consonantesActuales.slice(1);
        }
  
        consonantesActuales += letra;
      } else {
        silabaActual += consonantesActuales + letra;
        silabas.push(silabaActual);
        silabaActual = "";
        consonantesActuales = "";
      }
    }
  
    // Si hay consonantes sobrantes al final de la palabra, agréga a la última sílaba.
    if (consonantesActuales) {
      silabas[silabas.length - 1] += consonantesActuales;
    }
  
    return silabas;
  }

/**
 * Descompone una frase en un array de sílabas, insertando un espacio en blanco entre palabras.
 * @param {string} frase La frase a descomponer.
 * @returns {string[]} El array de sílabas.
 */
function descomponer_frase_silabas(frase) {
    
    // Limpiar la frase de espacios al principio y al final, y reemplazar múltiples espacios por un solo espacio
    frase = frase.trim().replace(/\s+/g, ' ');

    if(frase==""||frase==" "){
        return[];
    }
  
    // Dividir la frase en un array de palabras
    const palabras = frase.split(' ');
  
    // Array de resultado
    const silabas = [];
  
    // Iterar sobre cada palabra y descomponerla en sílabas
    for (const palabra of palabras) {
      // Descomponer la palabra en sílabas y agregar cada sílaba al array resultante
      const sílabasDePalabra = descomponer_silabas(palabra);
      silabas.push(...sílabasDePalabra);
    
      // Agregar un espacio en blanco al array resultante
      silabas.push('');
    }
  
    // Eliminar el último espacio en blanco del array resultante
    silabas.pop();
  
    return silabas;
  }


  
  /**
 * @param {string} frase
 * @returns {number}
 */
function contar_silabas_unicas(frase){
    let distintas=[];
  let frases=  descomponer_frase_silabas(frase);
  
   for(silaba of frases){
    if(silaba!=""){
        if(!distintas.includes(silaba)){
            distintas.push(silaba);
        }
    }
   }
   resultado=distintas.length
   return resultado;
  
}

