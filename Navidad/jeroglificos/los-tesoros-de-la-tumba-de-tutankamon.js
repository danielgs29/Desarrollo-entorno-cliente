/**
 * @param {string | string[] | {nombre: string, valor: number, peso: number}[]} inventario
 * @returns {string[]}
 */
function ordenar_inventario(inventario) {
  let resultado = [];

  if (Array.isArray(inventario)) {
    if (typeof inventario[0] == "string") {
      inventario = inputArray(inventario);
    }
  } else if (typeof inventario == "string") {
    inventario = inputCadena(inventario);
  }

  inventario.sort((a, b) => {
    if (a.valor > b.valor) {
      return -1;
    } else if (a.valor < b.valor) {
      return 1;
    } else {
      if (a.peso < b.peso) {
        return -1;
      } else if (a.peso > b.peso) {
        return 1;
      } else {
        return inventario.indexOf(a) - inventario.indexOf(b);
      }
    }
  });

  inventario.forEach((element) => {
    resultado.push(element.nombre);
  });

  return resultado;
}

//esta función devuelve un array de objetos en lugar de un array de string solamente con los nombres
//ya que en la version dos voy a necesitar tambien los atributos y no solo el nombre, me parece más util que devuelva ojetos.
function ordenar_inventario_version_web(inventario) {
  let resultado = [];

  if (Array.isArray(inventario)) {
    if (typeof inventario[1] == String) {
      inventario = inputArray(inventario);
    }
  } else if (typeof inventario == "string") {
    inventario = inputCadena(inventario);
  }

  inventario.sort((a, b) => {
    if (a.valor > b.valor) {
      return -1;
    } else if (a.valor < b.valor) {
      return 1;
    } else {
      if (a.peso < b.peso) {
        return -1;
      } else if (a.peso > b.peso) {
        return 1;
      } else {
        return inventario.indexOf(a) - inventario.indexOf(b);
      }
    }
  });

  inventario.forEach((element) => {
    resultado.push(element.nombre);
  });

  return inventario;
}

/**
 *
 * @param {string} inventario
 */
function inputCadena(inventario) {
  let separados = [];
  let objetos = [];
  let cadenas = inventario.split(/[\n\r]/);
  cadenas.forEach((element) => {
    const regex = /^[a-zA-Z]{1,9}\s[1-9][0-9]{0,3}\s[1-9][0-9]{0,3}$/;
    const matches = element.match(regex);
    if(!matches){
        alert("por favor introduzca datos con el fromato: Nombre(letras)+espacio+valor(numero)+espacio+peso(numero)")
        return[];
    }
    separados.push(element.split(" "));
  });
  separados.forEach((element) => {
    let operador = new Object();
    operador = {
      nombre: element[0],
      valor: element[1],
      peso: element[2],
    };

    objetos.push(operador);
  });

  return objetos;
}

function inputArray(inventario) {
  let separados = [];
  let objetos = [];

  inventario.forEach((element) => {
    const regex = /^[a-zA-Z]{1,9}\s[1-9][0-9]{0,3}\s[1-9][0-9]{0,3}$/;
    const matches = element.match(regex);
    if(!matches){
        return[];
    }
    separados.push(element.split(" "));
  });
  
  separados.forEach((element) => {
    let operador = new Object();
    operador = {
      nombre: element[0],
      valor: element[1],
      peso: element[2],
    };
    objetos.push(operador);
  });

  return objetos;
}
