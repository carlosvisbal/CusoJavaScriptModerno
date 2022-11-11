const hoy = new Date()
const day = hoy.getDay()
const horaActual = hoy.getHours()

const semana_arreglo = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado'
]

console.log(horaActual)
console.log(day)

if (day === 0 || day === 6){
    console.log('Hoy es:', semana_arreglo[day]);
    if (horaActual >= 9){
        console.log('Se encuentra Abierta la tienda');
    }else {
        console.log('Si abrimos hoy pero todavia se encuentra cerrada son las:', horaActual);
    }
}else{
    console.log('Hoy es:', semana_arreglo[day]);
    if (horaActual >= 11 ){ 
        console.log('Se encuentra Abierta la tienda'); 
    } else { console.log('Si abrimos hoy pero todavia se encuentra cerrada son las:', horaActual)}

}
