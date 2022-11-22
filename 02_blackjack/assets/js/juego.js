/**
 * 2C = Dos de Tréboles
 * 2D = Dos de Diamantes
 * 2H = Dos de Corazones
 * 2S = Dos de Espadas
 */

let deck         = []
const tipos      = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']
// Esta funcion crea un nuevo deck
const creaDeck =()=>{
    for (let i=2; i<=10; i++){
        for (let tipo of tipos){
            deck.push(i + tipo)
        }
        // deck.push(i+'C')
        // deck.push(i+'D')
        // deck.push(i+'H')
        // deck.push(i+'S')
    }

    for (let tipo of tipos){
        for (let especial of especiales){
            deck.push(especial + tipo)
        }

    }
    console.log(deck);
    // Con esta funcion se revuelve los elementos dentro de deck (shuffle)
    deck = _.shuffle(deck)
    console.log(deck);

}

creaDeck()

pedirCarta = () => {
    if (deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    let carta = deck.pop()
    // console.log(carta);
    return carta
}

// const valorCarta  = (carta) => {
//     const valor = carta.substring(0, carta.length - 1)
//     let puntos = 0
//     console.log({valor});
//     if(isNaN(valor)){
//         console.log('No es un numero');
//         puntos = ( valor === 'A' ) ? 11 : 10
//         console.log({puntos});
//     }else{
//         puntos = valor * 1
//         console.log({puntos});
//         console.log('Es un numero');
//     }
//     return valor
// }

const valorCarta = (carta) => {
    console.log({carta});
    const valor = carta.substring(0, carta.length - 1)
    return (isNaN(valor)) ? 
            (valor === 'A' ) ? 11 : 10
            : valor * 1 
}

const valor = valorCarta(pedirCarta())
console.log({valor});