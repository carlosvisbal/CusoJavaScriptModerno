//Los parentisis hacen referencia a que querremos devolver todo lo que hay dentro del ellos'.
const crearPersona = (nombre, apellidos) =>  ({nombre, apellidos})

const persona = crearPersona('Carlos', 'Visbal Atencia')

console.log({persona});



function imprimeArgumentos(){
    console.log(arguments);
}
// El parametro rest crea una lista o arreglo con todos los parametros que se le pasen a la funcion de flecha
const imprimeArgumentos2 = (nombre, ...args) => {
    //cuando quieres usar el parametro rets no podras recibir ningun otro parametro despues de este, pero puedes definir antes el parametro que quieras . este sera un parametro diferente a los demas (independiente)
    //console.log({nombre, args});
    return args
}
//
imprimeArgumentos(10, true)
const [ edad, vivo] = imprimeArgumentos2 ('Carlos', 10,  true)
console.log({ edad, vivo});


const {apellidos:nuevo_apellido} = crearPersona('Carlos', 'Visbal')
console.log({nuevo_apellido});

const objetCarlos = {
    nombre: 'Carlos Daniel',
    codeName: 'carlos.carlos',
    vivo: true,
    edad: 24,
    apellidos: ['visbal', 'Atencia']
}

console.log('-----------------------------------------------');

const imprimePropiedades = ({nombre, apellidos, edad=0,  codeName}) => {
    console.log({nombre});
    console.log({apellidos});
    console.log({codeName});
    console.log({edad});
}

imprimePropiedades(objetCarlos)

