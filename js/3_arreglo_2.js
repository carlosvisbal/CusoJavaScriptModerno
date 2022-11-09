let juegos = ['pes', 'fifa', 'combat', 'dragon']

console.log(juegos.length);

let primero = juegos[ 1 - 1]
console.log(primero);

let ultimo = juegos[juegos.length - 1]
console.log(ultimo);


juegos.forEach(
    (elemento, indice, arr) =>{
        console.log({elemento, indice, arr});
    }
)


let nuevaLomgitud = juegos.push('carro')
console.log({nuevaLomgitud}, juegos);


let nuevoElemetoAlInicio = juegos.unshift('Tiros')
console.log({nuevoElemetoAlInicio}, juegos);

let juegoBorradoUltimo = juegos.pop(juegos)
console.log({juegoBorradoUltimo});

let posicion = 1
let removerElementoParametrizado = juegos.splice(posicion, 2)
console.log({removerElementoParametrizado}, juegos);

let combatIndex = juegos.indexOf('combat') // CaseSensitive

console.log({combatIndex});
