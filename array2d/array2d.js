let fruits=    ["apples","oranges","bananas"];
let vegetables=["carrots","onions","potatoes"]
let meats=     ["eggs","chicken","fish"]

//creo un array con arrays dentro
let groceryList=[fruits,vegetables,meats];

groceryList[0][0]="mangoes";
//asi puedo cambiar un elemento

//imprimo los arrays mas no los elementos en cada aaray

for(let list of groceryList){
    console.log(list);
}

//imprimo todos los elementos
for(let list of groceryList){
    for(let item of list){
        console.log(item)
    }
}
//---------------------------------------------

const filas=10;
const columns=10;

//forma de crear un array con una dimension especificada
const myArray=new Array(filas);

// forma de crear multidimensional, en este caso todas las columnas son null
const myArray1=[];

for(let i=0; i<filas; i++){
    myArray1[i]=[];
    for(let j=0; j<columns;j++){
        myArray1[i][j]=null;
    }
}

// otro metdodocrea un array con arrays vacios dentro
const myArray2= new Array(filas);

for(let i=0; i<myArray2.length;i++){
    myArray2[i]=new Array(columns);
}

//otra forma mas enrevesada
const myArray3=Array.from(Array(filas), ()=> new Array(columns))

//otra forma con todo vacio
const myArray4=[[],[],[],[]];

console.log(myArray3);


