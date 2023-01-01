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


    

  
  
  
  
  
  
  
  