// Declara una funcion para encontrar el mayor de un array
function encontrarMayor(arr){
    // Initialize a counter
    let contador = []
    // Iterate through the array
    for(let i = 0; i <= arr.length; i++){
        // If the element is greater than the counter
        if(arr[i] > contador){
            // Assign the element to the counter
            contador = arr[i]
        }
    }
    // Return the counter
    return contador
}

console.log(encontrarMayor([1,20,3,4,5,10])); // 5
console.log(encontrarMayor([3, 7, 2, 9, 5])); // Debería imprimir 9