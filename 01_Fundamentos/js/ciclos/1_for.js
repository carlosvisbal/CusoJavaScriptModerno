const heroes = ['Batman', 'Superman', 'Aquaman']

console.warn('Ciclo For tradicional')

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('Ciclo For in')

for (let i in heroes) {
    console.log(heroes[i]);
}


console.warn('Ciclo For of')

for (let heroe of heroes){
    console.log({heroe});
}
