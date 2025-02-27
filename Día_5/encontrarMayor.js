// Declara una funcion para encontrar el mayor de un array
function encontrarMayor(arr) {
    if(!Array.isArray(arr)) return 'No es un array'
    if(arr.length === 0) return 'El array esta vacio'

    let contador = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > contador){
            contador = arr[i]
        }
    }
    return contador    
}

console.log(encontrarMayor([9,2,3]))


console.log(encontrarMayor({'String': 'obj'})) // Error de tipo de dato
console.log(encontrarMayor([])); // "El array está vacío"
console.log(encontrarMayor([31, 10, 3, 4, 5, 20])); // 20
console.log(encontrarMayor([1,24,3,4,5])) // Deveria imprimir 5
console.log(encontrarMayor([10,4,3,9,5])) // Deveria imprimir 5

