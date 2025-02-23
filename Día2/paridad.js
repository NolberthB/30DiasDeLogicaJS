
// Crea una arrow function,que recibe un numero y devuelve si es par o impar.
const esPar = (num) => {
    // Operador ternario, si el tipo de dato es diferente de number lanza un error.
  return typeof num !== "number" ? "Error ingresa un número"
    // Si es igual a number, se calcula el modulo.
    // si el resultado es '0' el numero es par(true), si es diferente es impar(false)
    : num % 2 === 0 ? true : false;
};

// Declara una funcion que recibe un parametro
function esPar2(num){
    // Valida si el dato es de tipo numero
    if( typeof num === 'number'){
        // Valida si es par o impar
        return num % 2 === 0 ? true : false
    }
    // Si no es de tipo numero retorna un error
    return 'Error ingresa un valor de tipo numero'
}

//console.log(esPar(4)); // true
//console.log(esPar("Hola")); // Error ingresa un número
//console.log(esPar(7)); // false

console.log(esPar2(4)); // true
console.log(esPar2(7)); // false
console.log(esPar2("Numero")); // Error ingresa un numero