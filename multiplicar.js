
const process = require('process');
let n1 = +process.argv[2];
let n2 = +process.argv[3];
let resultado = 0;

let multiplicar = function(n1,n2){   
    if( n1 === 0 || n2 === 0){
        return ` El resultado de la multiplicacion es  0`
    }else 
    resultado = n1 * n2
    return `El resultado  de la multiplicacion  es : ${+resultado}`
}

module.exports = multiplicar;



