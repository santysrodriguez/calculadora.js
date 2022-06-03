
const process = require('process');
const sumar  = require('./sumar');
const restar = require('./resta');
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');
const potencia = require('./potencia')

const operaciones = ['sumar','restar','multiplicar','dividir','potencia'];

let operacion = process.argv[2];
let n1 = +process.argv[3];
let n2 = +process.argv[4];
let resultado;

if(operaciones.includes(operacion)){

    switch (operacion) {
        case 'sumar':
            resultado = sumar(n1,n2);
            break;
        case 'restar':
            resultado = restar(n1,n2);
            break;
        case 'multiplicar' :
            resultado = multiplicar(n1,n2);
            break;
        case 'potencia' :
            resultado = potencia(n1,n2);
            break;
        case 'dividir' :
            resultado = dividir(n1,n2);
            break;
    
        default:
            resultado = 0;
            break;
    }
    if ( typeof resultado === 'undefined'){
        console.log('La operacion No es valida');
    }else {
        console.log(resultado);
    
    }

}else{
    console.log("La operación no es válida");
}


