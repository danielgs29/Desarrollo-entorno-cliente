function procesar(){
    var filase=document.getElementById("filas");
    var columnase=document.getElementById("columnas");

    var filas=filase.value;
    var columnas=columnase.value;
    var contador_columnas=0;
    var contador_filas=0;
    var numero=filas*columnas;

    console.log(columnas);
    console.log(filas);

    if(filas<=0||columnas<=0){
        alert("error introduce un numero mayor que cero");
    }
     
    let tabla = window.document.getElementById("datos");
    let cuerpoTabla=document.createElement("tbody");

    while(contador_filas<filas){
        let fila=document.createElement("tr");
        while(contador_columnas<columnas){
            let td1=document.createElement("td");
            td1.innerText=numero;
            fila.appendChild(td1);
            cuerpoTabla.appendChild(fila);
            contador_columnas++;
            numero--;   
        }
        contador_filas++;
        tabla.appendChild(cuerpoTabla);
        contador_columnas=0;
    }
}