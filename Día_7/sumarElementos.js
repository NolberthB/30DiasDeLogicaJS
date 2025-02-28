
// Arrow function que suma los elementos de un array
const sumarElementos = (arr) => {
    // Validacion de datos de entrada
    if(!Array.isArray(arr)) return 'Error el dato capturado no es de tipo array'
    if(arr.length === 0) return 'Array vacio'
    // La funcion some() devuelve true si al menos un elemento del array cumple con la condicion
    // isNaN() devuelve true si el dato no es un numero
    if(arr.some(isNaN)) return 'Hay datos que no son numericos en el array'

    let sumaTotal = 0 
    for(i = 0; i < arr.length; i++){
        sumaTotal += arr[i]
    }
    return sumaTotal
}


console.log(sumarElementos([10, 20, 30])) // Deberia imprimir 60
console.log(sumarElementos([10, 20, 30, 40])) // Deberia imprimir 100
console.log(sumarElementos([])) // Deberia imprimir array vacio
console.log(sumarElementos('Hola')) // Deberia imprimir error dato capturado no es de tipo array
console.log(sumarElementos([1,2,'a',3,4])) // Deberia imprimir hay datos que no son numericos en el arraya