//**
// crear array de longituf N y que sus elementos sean
//numeros del 1 hasa N
//  */

let longitud = 7;

function crearArray(n) {
    if (n <= 0){
        return [];
    }
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    return arr;

}

let resultado = crearArray(longitud);

console.log(resultado);