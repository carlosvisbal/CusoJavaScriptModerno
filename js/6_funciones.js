
// Como se nombraban las funciones anteriormente
function saludar(nombre){
    console.log({arguments});
    console.log(`Hola ${nombre}`);
    return [1,2,3,4,5,6,7,8,9,10]
    console.log('Esto nuca se va ejecutar ya que esta declarado despues del return');
}

// Asignar una funciona a una variable de tipo constante(estas se conocen como funciones anonimas)
const saludar2 = function(nombre){
    console.log(`Hola ${nombre}`);
};

// DEfinir las funciones con la nueva sintaxis
const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

// recibir parametros en las funciones cuaando es uno solo (Por entendimiento mejor dejar los parentisis)
const saludarFlecha2 = nombre =>{
    console.log(`Hola ${nombre}`);
}

// recibir varios parametros en la nuevas funciones de flecha
const saludarFlecha3 = (nombre, apellido) =>{
    console.log(`Hola ${nombre} ${apellido}`);
}

// inicializar las funciones 
const retornosaludar = saludar('Carlos', 20, 'Colombia');
// cuando no se retorna algo inplicito se retorna un undefined por defecto
console.log('Retorno de saludar fue:', {retornosaludar});
saludar2('Daniel');
saludarFlecha();
saludarFlecha2('Carlos');
saludarFlecha3('Carlos', 'Daniel');