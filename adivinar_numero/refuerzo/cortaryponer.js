    array=[1,2,3,4,5];
       
    function cortaryponer(array=[],empezar,terminar){
            let devolver=[];

          for(let i=0;i<terminar;i++){
            devolver[empezar]=array[empezar];
            console.log(i)
            console.log(devolver)
            empezar++;
          }
  
          return devolver;
        }

let array2=cortaryponer(array,2,2);
console.log(array2)