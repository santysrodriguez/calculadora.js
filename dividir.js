

const process = require('process');
let n1 = +process.argv[2];
let n2 = +process.argv[3];
let resultado = 0;

let dividir = function(n1,n2){   
    if(n2 === 0){
        return `No se puede dividir por cero`
    }else 
    resultado = n1 / n2
    return `El resultado  de la divicion  es : ${+resultado}`
}


module.exports = dividir;