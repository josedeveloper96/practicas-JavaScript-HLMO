function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log ('dibujando....');}
}

let punto = { z: 7};
Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);

console.log(punto);





/* const Point = new function('x','y', '
    this.x =x;
    this.y = y;
    this.dibujar = function() {console.log('DIibujando....'');} ');

const p = new Point(1, 2);
console.log(p); */