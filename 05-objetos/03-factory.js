function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function() {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nicolas@gmail.com');
let user2 = crearUsuario('felipe', 'felipe@gmail.com');
console.log(user1, user2);