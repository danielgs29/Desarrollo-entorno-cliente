var libros=[];

class Libro{
    constructor(titulo,autor,año,genero){
        this.titulo=titulo;
        this.autor=autor;
        this.año=año
        this.genero=genero;
    }
    informacion(){
        return `Titulo: ${this.titulo} Autor: ${this.autor} Año: ${this.año} Genero: ${this.genero}`
    }
}

function validar(event){
    event.preventDefault();
    let titulo=document.getElementById("titulo").value;
    let autor=document.getElementById("autor").value;
    let genero=document.getElementById("genero").value;
    let año=document.getElementById("año").value;

    let generoValido=false;

    año=Number(año);

    if(titulo.length==0||autor.length==0||genero.length==0||año==0){
      alert("por favor rellene todos los campos");
      return;
    }

    if(año<1000){
        alert("por favor introduzca un año valido");
        return;
    }

    switch(genero){
        case "aventura":
            generoValido=true;
            break;
        case "terror":
             generoValido=true;
            break;
         case "fantasia":
             generoValido=true;
             break;
    }

    if(generoValido== false){
        alert("genero invalido")
        return;
    }

    guardarCrear(titulo,autor,año,genero);
}

function guardarCrear(titulo,autor,año,genero){
    let libro = new Libro(titulo,autor,año,genero);
    libros.push(libro);
}

function mostrar(event){
    let tabla=document.getElementById("tabla");
    tabla.style="";
    tabla.innerHTML="";
    event.preventDefault();

    libros.forEach(element => {
        
     let tr=document.createElement("tr");
     let td1=document.createElement("td");
     td1.textContent=element.titulo;
     tr.appendChild(td1);

     let td2=document.createElement("td");
     td2.textContent=element.autor;
     tr.appendChild(td2);

     let td3=document.createElement("td");
     td3.textContent=element.año;
     tr.appendChild(td3);

     let td4=document.createElement("td");
     td4.textContent=element.genero;
     tr.appendChild(td4);

     tabla.appendChild(tr);
    });
}

function mostrarOrdenado(event){
    event.preventDefault();
    let tabla=document.getElementById("tabla");
    let autores=[];
    tabla.style="";
    tabla.innerHTML="";

    libros.forEach(element => {
     autores.push(element.autor);
    })
    autores.sort();

    for(let i=0; i<autores.length; i++){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=autores[i];
        tr.appendChild(td1);
        tabla.append(tr);
    }
}

function mostrarInfo(event){
    let tabla=document.getElementById("tabla");
    tabla.innerHTML="";
    tabla.style="";
    event.preventDefault();
    let generoi = document.getElementById("info").value;
    for(let i=0;i<libros.length;i++){
        if(libros[i].genero==generoi){
         let tr=document.createElement("tr");
         let td=document.createElement("td");
         td.innerText=libros[i].informacion();
         tr.appendChild(td);
         tabla.appendChild(tr);
        }
    };
}

