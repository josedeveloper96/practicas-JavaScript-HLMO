/**
 * crear algoritmo que tome un array de
 * objetos y devuelv un array de parse
 */

let array = [{
    id: 1,
    name: 'nicolas',
}, {
    id: 2,
    name: 'felipe',
}, {
    id: 3,
    name: 'pepe',
}];

let pared = [
    [1, { id: 1, name: "nicolas"}],
    [2, { id: 2, name: "felipe"}],
    [3, { id: 3, name: "pepe"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento  = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}
let resutado = toPairs(array);
console.log(resutado);