var primernumero=Math.floor(Math.random() * (9 - 1 +1) + 1);
var segundonumero=Math.floor(Math.random() * (9 - 1 +1) + 1);
var tercernumero=Math.floor(Math.random() * (9 - 1 +1) + 1);

function verificarNumero(numero){
    let esta=false;
if(numero==primerdato || numero==segundodato || numero== tercerdato){
esta=true;
}
return esta;
}

function jugar(){

var primerdato = document.getElementById("uno");
 var segundodato = document.getElementById("dos");
 var tercerdato = document.getElementById("tres");

    primerdato.innerText=primernumero;
    segundodato.innerText=segundonumero;
    tercerdato.innerText=tercernumero;

    let introducido1 = document.getElementById("intro1");
    let introducido2 = document.getElementById("intro2");
    let introducido3 = document.getElementById("intro3");

    let numero1=introducido1.value;
    let numero2=introducido2.value;
    let numero3=introducido3.value;

    let tabla = window.document.getElementById("datos");
    let cuerpoTabla=document.createElement('tbody');

    let fila=document.createElement('tr');
    let td1=document.createElement('td');
    td1.innerText=numero1;
    fila.appendChild(td1);
    console.log(numero1);
    let td2=document.createElement('td');
    td2.innerText=numero2;
    fila.appendChild(td2);
    let td3=document.createElement('td');
    td3.innerText=numero3;
    fila.appendChild(td3);

    cuerpoTabla.appendChild(fila);
    tabla.appendChild(cuerpoTabla);

  if(numero1==primernumero || numero1==segundonumero || numero1==tercernumero){
    td1.style="Background-color:yellow"
  }else{
    td1.style="Background-color:red"
  }
  if(numero2==primernumero || numero2==segundonumero || numero2==tercernumero){
    td2.style="Background-color:yellow"
  }else{
    td2.style="Background-color:red"
  }
  if(numero3==primernumero || numero3==segundonumero || numero3==tercernumero){
    td3.style="Background-color:yellow"
  }else{
    td3.style="Background-color:red"
  }

  if(numero1==primernumero){
    td1.style="Background-color:green"
  }
  if(numero2==segundonumero){
    td2.style="Background-color:green"
  }
  if(numero3==tercernumero){
    td3.style="Background-color:green"
  }

}