async function holaMundo(){
    let data = undefined;
    try{
        const response= await fetch("#");
        data =await response.json();
        console.log(data)
    } catch (error){
        if(error instanceof TypeError){
            console.log("error de tipo")
        }
        if(error instanceof SyntaxError){
            console.log("error de sintaxis")
        }
         if(error instanceof ReferenceError){
            console.log("error de referencia")
        }
    } finally{
        if(data){
            console.log("mostrar ui")
        }
        else{
            console.log("mostrarle al usuario")
        }
    }
}

try{
    let numero=y;
    if(isNaN(numero)){
        throw new Error("el caracter introducido no es un numero")
    }

    console.log(numero*numero)
}catch{
    console.log("se ha producido el siguiente error: "+`${error}`)
}