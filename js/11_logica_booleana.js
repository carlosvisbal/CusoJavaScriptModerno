
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');

console.log(true); // Regresa True
// La negacion se representa con el simbole de !
console.log(!true); // regresa un flase
console.log(!false); // regresa un true

console.log(!regresaTrue()); // Regresa True
console.log(!regresaFalse()); // Regresa False

console.log(regresaTrue()); // Regresa True
console.warn('Condicion And');

console.log(true && true);
console.log(true && false);
// cuando la primera comparacion regresa falso javascript ignora la siguente y detiene la ejecucion
console.log(regresaFalse() && regresaTrue());
// Aca se ejecuta falso porque la primera es verdadera
console.log(regresaTrue() && regresaFalse());
console.log('==================');
console.log(true && true && true && true && false);

console.warn('Condicion OR');
console.log(true || false);
console.log(false || false);
console.log(!false || false);
console.log(regresaTrue() || regresaFalse());
console.log(true || true || true || true || false);






