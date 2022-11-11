let a = 5

if (a) { // undefined, null , una signacion
    console.log(a)
} else {
    console.log(`no llego a`)
}

const hoy = new Date()
const day = hoy.getDay()
console.log({hoy})
console.log({day});


if (day === 0){
    console.log('hoy es domingo')
} else if (day===1) {
    console.log('hoy es lunes')
} else if (day===2) {
    console.log('hoy martes')
}

const semana = {
    0:'Domingo - Dia',
    1:'Lunes - Dia',
    2:'Martes - Dia',
    3:'Miercoles - Dia',
    4:'Jueves - Dia',
    5:'Viernes - Dia',
    6:'Sábado - Dia'
}

const semana_arreglo = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado'
]


console.log('Hoy es:', semana[day] || 'Dia no encontrado')
console.log('Hoy es:', semana_arreglo[day] || 'Dia no encontrado')
