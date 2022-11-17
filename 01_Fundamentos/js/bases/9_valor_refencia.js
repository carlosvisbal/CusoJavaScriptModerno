
let a = 10
let b =10

console.log({a, b});

//Todos los objetos se pasan por refencia menos los primitivos. 
let juan = {nombre:'Juan'}
// Se le llama operador spread (...) cuando se utiliza para romper la referencia de un objeto
let ana = {...juan}
ana.nombre= 'ana'
console.log({juan, ana});

// incluso si se cambia por una funcion felcha sigue teniendo el mismo resultado se psa la referencia
// Se le llama operador rest(...) cuando se coloca para unir todos los parametros y convertirlos en un arreglo
// const cambiarNombre = ({...persona}) =>{
//     persona.nombre = 'Tony'
//     return persona
// }
const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'Tony'
    return persona
}

let peter = {nombre:'Peter'}
let tony = cambiarNombre(peter)

console.log({peter , tony});


const frutas = ['Manzana', 'Pera', 'Pinha']

// Usando el operador spread
// Tomar tiempo en romper la referencia con slice
console.time('spread')
const otrsFrutas = [...frutas]
console.timeEnd('spread')

// Usando slice
// Tomar tiempo en romper la referencia con slice
console.time('slicer')
const otrsFrutasdos = frutas.slice()
console.timeEnd('slicer')

otrsFrutasdos.push('Fresa')
console.log({otrsFrutasdos})
otrsFrutas.push('Mango')
console.log({frutas, otrsFrutas})
