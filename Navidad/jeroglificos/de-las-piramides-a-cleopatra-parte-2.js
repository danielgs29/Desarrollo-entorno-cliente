function calcular(){
    let numA=document.getElementById("año1").value;
    let numB=document.getElementById("año2").value;
    let numC=document.getElementById("año3").value;

    let claculado=fecha_mas_cercana(numA, numB, numC);

    if(isNaN(claculado)){
        alert("Datos invalidos")
    }else{

    let tabla=document.getElementById("tabla");
    tabla.style.display="";

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.textContent=numA
    tr.append(td1)

    let td2=document.createElement("td");
    td2.textContent=numB
    tr.append(td2)

    let td3=document.createElement("td");
    td3.textContent=numC
    tr.append(td3)

    let td4=document.createElement("td");
    td4.textContent=claculado;
    tr.append(td4)

    tabla.append(tr);
    }

}