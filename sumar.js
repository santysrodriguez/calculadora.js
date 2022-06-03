const process = require('process');
let n1 = +process.argv[2];
let n2 = +process.argv[3];
let resultado = 0;

let sumar = function(n1,n2){     
    resultado = n1 + n2;
    return `El resultado de la suma es : ${resultado}`
}

module.exports = sumar;
