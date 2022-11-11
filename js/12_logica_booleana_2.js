console.warn('logica booleana 2')
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}
const soyUndefined = undefined
const soyNull = null
const soyFalse = false


// Si en el operador And (&&) se regresa un false al iniciar se detien la validacion y see retorna el primer valor 
const a1 = soyFalse && 'Hola Mundo'
// Esta validacion retorna un false ya que se encuntra un valor false en la instrucion
const a2 = 'Hola' && 'Mundo' && soyFalse && true
// Esta validacion retorna 'Ya no soy False' ya que la primera tiene como valor false y la segunda tiene un valor asignado (aceptado)
const a3 = soyFalse || 'Ya no soy False'
// Esta validacion retorna 'Ya no soy False' ya que es un valor aceptado por eso en esta ocacion no se retorno el true
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy False' || true
// Esta validacion retorna un true ya que al llmar a la funcion regresaTrue se obtiene el valor de "true"
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy  False' || true
console.table({a1, a2, a3, a4, a5});

