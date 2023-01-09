/**
 * @param {any[]} array
 * @returns {void}
 */
function barajar(array){
    if(array.length==0||!Array.isArray(array)){
        return;
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  