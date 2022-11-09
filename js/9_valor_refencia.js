
// Todos los objetos se pasan por refencia menos los primitivos que se pasan por valor.
let a = 10
let b = a

a = 50

console.log({a , b});

let juan = {
    nombre:'Juan'
}
// Cuando se utilizan los tres puentos fuera de la funcion para unirlos todos en un arreglo este toma como nombre el de spread(...) y separa los objetos para obtener uno totalmente independiente del otro
let ana = {...juan}
ana.nombre = 'Ana'
// Con el operados spread(...) se rompre la referencia de objetos para obtener uno totalmente independiente del otro(No se modifica el inicial)
console.log({juan, ana});


const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Keren'
    return persona
}

let oso = { nombre:'Julio'}

let keren = cambiarNombre(oso)

console.log({oso, keren});


//Areglos Romper la referencia de (objetos)
const frutas = ['Manzana', 'Mango' , 'Pera']

console.time('slice');
//Nuevo arreglo utilizando slice
const otrasFrutas2 = frutas.slice()
console.timeEnd('slice');

console.time('spread');
//Nuevo arreglo utilizando spread
const otrasFrutas = [...frutas]
console.timeEnd('spread');

otrasFrutas.push('Fresas')
otrasFrutas2.push('sandia')
console.table({frutas, otrasFrutas, otrasFrutas2})
console.log({frutas, otrasFrutas});