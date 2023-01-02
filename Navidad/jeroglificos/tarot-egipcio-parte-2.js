/**
 * @param {any[]} array
 * @param {number} numero
 * @returns {any[]}
 */
function sacar_al_azar(array, numero) {
  if (!Array.isArray(array) || numero < 1) {
    return [];
  } 
  else if (numero >= array.length) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  } 
  else {
    let resultado = [];
    let generados = [];
    for (let i = 0; i < numero; i++) {
      let generado = Math.floor(Math.random() * array.length);
      if (!generados.includes(generado)) {
        generados.push(generado);
        resultado.push(array[generado]);
      } else {
        i--;
      }
    }
    return resultado;
  }
}


