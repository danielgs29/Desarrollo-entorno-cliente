
function crearTabla(){
    
   let tabla=document.getElementById("tabla");
   let numero= document.getElementById("numero").value;
   if(numero<1||numero>9999999|| isNaN(numero)){
    return "";
}
   let objeto=numeros_jeroglificos_v2(numero);

  tabla.style.display="";

  let tr= document.createElement("tr");
  let td1=document.createElement("td");
  td1.textContent=objeto.numero;
  tr.appendChild(td1);

  let td2=document.createElement("td");
  td2.textContent=objeto.simbolico;
  tr.appendChild(td2);

  let td3=document.createElement("td");
  td3.textContent=objeto.jeroglifico;
  td3.className="jeroglifico"
  tr.appendChild(td3);

  tabla.prepend(tr);
}