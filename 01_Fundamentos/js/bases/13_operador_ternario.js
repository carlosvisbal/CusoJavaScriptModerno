const hoy = new Date()
console.log({hoy});
const day = hoy.getDay()
const horaActual = hoy.getHours() % 12 || 12

const semana_arreglo = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado'
]

console.log({horaActual});

let horaApertura = ([0,6].includes(day)) ? 9 : 11
console.log('Hoy es:', semana_arreglo[day]);
console.log({horaApertura});


let mensaje = (horaActual >= horaApertura) ? 'Se encuentra Abierta la tienda' : `Si abrimos hoy pero todavia se encuentra cerrada son las:${horaActual}`
console.log({mensaje});

// if ([0,6].includes(day)){
//     console.log('Hoy es:', semana_arreglo[day]);
//     if (horaActual >= 9){
//         console.log('Se encuentra Abierta la tienda');
//     }else {
//         console.log('Si abrimos hoy pero todavia se encuentra cerrada son las:', horaActual);
//     }
// }else{
//     console.log('Hoy es:', semana_arreglo[day]);
//     if (horaActual >= 11 ){ 
//         console.log('Se encuentra Abierta la tienda'); 
//     } else { console.log('Si abrimos hoy pero todavia se encuentra cerrada son las:', horaActual)}

// }
