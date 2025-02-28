
// Funcion que recibe un array y retorna el array invertido
function invertirArray(arr) {
  // Validando datos, si el dato no es un array o si el array esta vacio
  if(!Array.isArray(arr)) return 'El dato capturado no es un array'
  if(arr.length === 0) return 'El array esta vacio'

  // Creando un array vacio para guardar los elementos del array original en orden inverso
  let arrInvertido = []
  // Recorriendo el array original desde el ultimo elemento hasta
  // el primer elemento y guardando en arrInvertido
  for(i = arr.length - 1; i >= 0; i--){
    arrInvertido.push(arr[i])
  }
  return arrInvertido
}

console.log(invertirArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(invertirArray([])); // El array esta vacio
console.log(invertirArray('Hola')); // El dato capturado no es un array
