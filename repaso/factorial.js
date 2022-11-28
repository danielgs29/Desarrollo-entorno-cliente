function factorial(n=Number){

if(isNaN(n)|| n < 1) return NaN;

if(n==1)return 1;

return n* factorial(n-1);

}

function factorial2(number) {

    if (number < 0) {
        return -1;
    } else {
        let devolver = 1;

        for (i = 1; i < number; i++) {

            devolver += devolver * i;
        }
        return devolver;
    }
}

let prueba=factorial2(3);
console.log(prueba);