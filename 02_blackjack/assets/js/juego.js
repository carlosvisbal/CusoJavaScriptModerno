/**
 * 2C = Dos de Tréboles
 * 2D = Dos de Diamantes
 * 2H = Dos de Corazones
 * 2S = Dos de Espadas
 */

let deck         = []
const tipos      = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']
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
    deck = _.shuffle(deck)
    console.log(deck[1]);

}

creaDeck()