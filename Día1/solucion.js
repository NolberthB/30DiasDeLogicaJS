// SUMA BACICA

// Declara una funcion suma(a, b) que recibe dos argumentos
function suma(a, b) {
    // valida que ambos parametro sean de tipo numero
    if (typeof a === 'number' && typeof b === 'number') {
        // Si se cumple la condicion se retorna el valor de la suma
        return a + b;
    }else {
        // En caso de que algun argumento sea de otro tipo de dato, se imprime un mensje de error
        return 'No se puede sumar porque los valores no son números';
    }
}
// Ejecuta la funcion por consola.
console.log(suma(5, '2')); // Deveria imprimir un error
console.log(suma(2, 6)); // Deveria imprimir 8
console.log(suma(4, '8')); // Deveria imprimir un error
console.log(suma(3, 0)); // Deveria imprimir 3
