//personaje de Tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.anime)
console.log(personaje['nombre']);

personaje.edad = 18;

let llave = 'edad';
personaje ['llave'] = 17;

delete personaje.anime;

console.log(personaje);