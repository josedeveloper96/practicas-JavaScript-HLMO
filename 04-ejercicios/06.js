/**
 * crear algoritmo que devuelva cantidad
 * de numeros positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function CuantosPositivios(arr) {
    let cantidad = 0;
    for (elemento of arr) {
        if (elemento > 0 ) {
            cantidad ++;
        }
    }
    return cantidad;

}

let resultado = CuantosPositivios(array);
console.log(resultado);