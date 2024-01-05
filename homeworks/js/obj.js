let persona = {
    nombre: 'Laura',
    edad: 26,
    estudios: {programacion: true},
    saludar: function (str) {
        console.log('Hola' + ' ' + str)
    }
};

//Para llamar el objeto mediante Dot-Notation
console.log(persona.edad)

//Para acceder, crear propiedad y modificar(reescribir) el valor de una propiedad mediante Dot-Notation
persona.nombre = 'Mauricio';
console.log(persona.nombre)

persona.apellido = 'Gomez';
console.log(persona)

//Para eliminar propiedades de un objeto mediante Dot-Notation
delete persona.apellido;
console.log(persona)

//Para llamar una funcion incluida como metodo en el objeto mediante Dot-Notation
persona.saludar('todos');


let atuendos = {manos: ['Guantes', 'Anillos'], pies:['Zapatos', 'Medias']};

//Para llamar o acceder a las propiedades  del objeto mediante Bracket-Notation
console.log(atuendos['manos']);

// Para crear propiedad al objeto mediante Bracke-Notation
atuendos['piernas'] = ['Bermudas', 'pantalones']
console.log(atuendos)

//Diferencias entre el DOT-NOTATION Y EL BRACKET-NOTATION
let comidas = {};
let diferenciasDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['PropDos'] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciasDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

//Ahi podemos ver que no nos aparecen las propiedades como les pusimos al llamar los argumentos
//eso se debe a que para que eso pase siempre debemos llamar los parametros o argumentos
//dentro de la funcion asi

let comidasOrigi = {};
let diferenciasDeNotacionesOrigi = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciasDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

//y asi si obtendremos el resultado que queremos
//para utilizar una variable externa siempre con bracketNotation