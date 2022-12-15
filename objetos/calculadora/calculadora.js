var lista_operadores=[];
var inicializado = false;


class Operadors{
    constructor (funcion,texto,ayuda,operandos){
    this.funcion=funcion;
    this.texto=texto;
    this.ayuda=ayuda;
    this.operandos = (operandos === undefined) ? 2 : operandos;
    }

}

function iniciarOperadores(){
    let suma=new Operadors((operador1,operador2)=>operador1+operador2,"+","Suma los dos operadores");
    lista_operadores.push(suma);
    let resta=new Operadors((operador1,operador2)=>operador1-operador2,"-","Resta los dos operadores");
    lista_operadores.push(resta);
    let multiplicacion=new Operadors((operador1,operador2)=>operador1*operador2,"*","Multiplica los dos operadores");
    lista_operadores.push(multiplicacion);
    let division=new Operadors((operador1,operador2)=>operador1/operador2,"/","Divide los dos operadores");
    lista_operadores.push(division);
    let aleatorio=new Operadors((operador1)=>Math.floor(Math.random()*operador1),"?"," Genera un numero aleatorio entre 0 y el introducido",1);
    lista_operadores.push(aleatorio);
}

function cargarOperadores(){
    if(inicializado)return;
    iniciarOperadores();

    let texto=document.getElementById("texto");
    texto.textContent=lista_operadores[0].ayuda;

    let operadores= document.getElementById("operadores");
    for(let i=0; i<lista_operadores.length;i++){
        let operador=document.createElement("option");
        operador["value"]=String(i);
        operador.textContent=lista_operadores[i].texto;
        console.log(lista_operadores[i].texto)
        operadores.append(operador);
    }
    operadores.addEventListener("change", onChangeOperador);
    operadores.addEventListener("change", onChangeOperador_operandos);

    inicializado=true;
    
}

function onChangeOperador(){
 let operador=document.getElementById("operadores");
 let indice=Number(operador.value);

 let funcion=lista_operadores[indice];
 let texto=document.getElementById("texto");
 texto.textContent=funcion.ayuda;

}

function onChangeOperador_operandos(){
    let operador=document.getElementById("operadores");
    let indice=Number(operador.value);
   
    let funcion=lista_operadores[indice];
    let numOperadores=funcion.operandos;
    let input2=document.getElementById("op2");

    if(Number(numOperadores)<2){
        input2.disabled=true
    }
   }

function calcular(){
    let op1=document.getElementById("op1").value;
    let op2=document.getElementById("op2").value;

    op1 = Number(op1);
    op2 = Number(op2);

    let operador=document.getElementById("operadores");
    let indice=operador.value;

    let funcion=lista_operadores[indice].funcion;
    let resultado=funcion(op1,op2);

    let inresultado=document.getElementById("resultado");
    console.log(resultado);
    inresultado.value=resultado;

}
window.onload=cargarOperadores;

