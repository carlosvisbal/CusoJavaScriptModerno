const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (mienbro) => (mienbro) ? `Dos dolares` : `tres dolares`

console.log(elMayor(513153,3213212));

console.log(tieneMembresia(true));

const amigo = false

const amigoArr = [
    'Carlos',
    'Oso',
    'Ivan',
    amigo ? 'Thor' : 'Jaun',
    //(()=> 'Carol')()
    elMayor(12,23)
]

console.log(amigoArr);

const nota = 82

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'B+' :
              nota >= 80 ? 'C+' :
              nota >= 70 ? 'D+' : 'F'

console.log({nota, grado});


