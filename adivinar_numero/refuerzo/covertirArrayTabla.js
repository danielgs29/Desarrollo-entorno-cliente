       window.onload=convertir;
        
        function convertir(array=[],columnas){
            array=[1,2,4,,6];
            posiciones=[];
            cuantos=0;
            for(x in array){
                cuantos++;
                posiciones.push(x);
                console.log(posiciones);

            }
            console.log(cuantos);
            let contador=0;
            columnas=3;
           let tabla=document.getElementById("tabla");
           let filas=Math.ceil(cuantos/columnas);
           console.log(filas);
           let body=document.createElement("tbody");
           for(let i=0; i<filas;i++){
                let fila=document.createElement("tr");
                for(let j=0; j<columnas;j++){
                    let td=document.createElement("td");
                    td.textContent=array[posiciones[contador]];
                    contador++;
                    fila.appendChild(td);
                }
                body.appendChild(fila);
           }
           tabla.appendChild(body);
        }
        
