
const process = require('process');
let n1 = +process.argv[2];
let n2 = +process.argv[3];


function potencia(n1,n2){
    let resultado = 1;

    for (let i = 0; i< n2; i++){
        resultado *= n1;
    }
    return `El resultado de la potencia es : ${resultado}`
}

module.exports = potencia;