
var lista_funciones_operadores=[];
var lista_operadores=[];
var inicializado=false;

function inicializar_operadores(){
    lista_funciones_operadores.push((op1,op2)=>op1 + op2);
    lista_operadores.push("+");

    lista_funciones_operadores.push((op1,op2)=>op1 - op2);
    lista_operadores.push("-");

    lista_funciones_operadores.push(Math.min);
    lista_operadores.push("min");

    lista_funciones_operadores.push((op1)=>-op1);
    lista_operadores.push("neg");

    lista_funciones_operadores.push((op1,op2)=>{
        let rango=(op2-op1)+1;
        return Math.trunc(Math.random()*rango)+op1;
    })
    lista_operadores.push("random");
}

function inicializar_calculadora(){
    if(inicializado) return;

    inicializar_operadores();

    //inicializar el combo

    let combo= window.document.getElementById("combo_operador")
    for(let i=0; i<lista_operadores.length;i++){
        let option=window.document.createElement("option");
        option["value"]=String(i);
        option.textContent=lista_operadores[i];

        combo.append(option);
    }
    inicializado=true;
}

function calcular(event){
    event.preventDefault();
    let operando1=document.getElementById("op1").value;
    let operando2=document.getElementById("op2").value;

    operando1=Number(operando1);
    operando2=Number(operando2);

    let indice_combo=document.getElementById("combo_operador").value;
    let operador=lista_funciones_operadores[indice_combo];

    let resultado=operador(operando1,operando2);
    let resultadoe=document.getElementById("resultado");
    resultadoe.textContent=(resultado);

}
window.onload=inicializar_calculadora;