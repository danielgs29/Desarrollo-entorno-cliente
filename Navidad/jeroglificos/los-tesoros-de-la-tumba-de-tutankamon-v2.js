function mostrar(){
    let texto=document.getElementById("texto").value;
    let objetos = ordenar_inventario_version_web(texto);
    let tabla=document.getElementById("tabla")
    tabla.textContent="";
    let tbody=document.createElement("tbody");

    let thead=document.createElement("thead");
    let th1=document.createElement("th");
    th1.textContent="Objeto";
    thead.appendChild(th1)
    let th2=document.createElement("th");
    th2.textContent="Valor";
    thead.appendChild(th2)
    let th3=document.createElement("th");
    th3.textContent="Peso";
    thead.appendChild(th3);
    tabla.appendChild(thead);

    objetos.forEach(element => {
        let tr = document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");

        td1.textContent=element.nombre
        td2.textContent=element.valor
        td3.textContent=element.peso

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        
        tbody.appendChild(tr)
    });

    
    tabla.appendChild(tbody);

    
}