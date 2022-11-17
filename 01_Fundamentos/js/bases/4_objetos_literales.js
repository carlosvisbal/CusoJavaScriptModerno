// ObjetosLiterales
const personaje = {
    nombre: 'Carlos',
    email: 'carlos.carlos@gmail.com',
    password: 'password',
    confirmPassword: 'password',
    coordds:{
        lat:10.0,
        lng:12.3
    },
    lenguajes:['Python','JavaScript'],
    direccion : {
        calle : 'Carrera 86# 112-61',
        zip : 80001
    }
    
}

//LLamar a una propiedad del objeto
console.log('Nombre:', personaje['nombre'])
console.log('Email:', personaje['email'])
//LLamar a una propiedad del objeto dentro de una propiedad de este.
console.log('Coordenadas:', personaje['coordds']['lat'])
// Obtener la lonjitud del objeto
console.log('Número de Lenguajes:', personaje.lenguajes.length)
// Obtener el ultimo elemento de un propiedad tipo arreglo del objeto 
console.log('último de Lenguaje:', personaje.lenguajes[personaje.lenguajes.length-1])
// Obtener la propiedad con una variable nombrada
const x = 'password'
console.log('Tiene Contrasenha?', personaje[x])
// Eliminar un elemento o propiedade del objeto
delete personaje.password
// Agrgar una propiedad al objeto lineal
personaje.casado = true
//  obtener un arrray o arreglo que contiene las propiedades de este en un formato cadena de texto
const entriesPares = Object.entries(personaje)
console.log({entriesPares})
// Congelar la edicion de las propiedades del objeto mas no las propiedades de las propiedades papa (las proiedades hijas on editables a menos que tambien sean nombradas explicitamente como lo fue nombrado el objeto para congelar sus propiedades principales o papa)
Object.freeze(personaje)
// Ejemplo que despues de hacerle freeze al objeto no se pueden editar sus propiedades
personaje.dinero = 1000000
// Ejemplo que demuestra que las propiedades hijas son editables ya que stan no fueron nombredas explicitamente con el metodo freeze
personaje.direccion.calle='carrera 1123'
console.log({personaje});
// Obtener un array de las claves pertenecientes de las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje)
console.log({propiedades});
// Obtener un array de los valores pertenecientes de las propiedades del objeto
const valores = Object.values(personaje)
console.log({valores});
// Crear un objeto que hereda las propiedadesde objeto que se quiere clonar(hereda el freeze)
const personaje_2 = Object.create(personaje)
// no se puede editar ya que hereda el metodo freeze del objeto clonado pero si deja agregar nuevas propiedades
personaje_2.casado = false
personaje_2.dinero = 1000000;
console.log({personaje_2});

