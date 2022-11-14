let edad;

do{
    edad= Number(prompt("dime tu edad"));
}while( Number.isNaN(edad)||(edad<0));

if(edad>=18){
    window.alert("ya puedes conducir");
}

