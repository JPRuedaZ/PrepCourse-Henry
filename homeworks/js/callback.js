//Aca se crea la funcion 1
let saludoInicial = function () {
    return 'Hola';
}

//Aca se crea la funcion 2
let saludoDirigido = function () {
    return 'Tu'
}

//Aca se crea la funcion principal que va a hacer el callback
let saludoFinal = function (cb1,cb2){
    return `${cb1()} ${cb2()}`
}

//El llamado de la funcion se archiva en una variable
let resultado = saludoFinal(saludoInicial,saludoDirigido);

//Aca el resultado se refleja en consola.
console.log(resultado);


//EJEMPLO 2

//Aca creamos la funcion 1 con un parametro comida
let comida = function (comida) {
    return `Hoy quiero comer ${comida}`;
}

//Aca creamos la funcion principal que va a llamar al callback y al mismo parametro de la primera.
let frase = function (comida, cb1){
    return cb1(comida);
}

// Aca se archiva el llamado callback de la funcion principal en una variable
let fraseFinal = frase('Pizza', comida);

//Aca se refleja en consola el resultado
console.log(fraseFinal);