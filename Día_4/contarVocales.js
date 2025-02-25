
// Define arrow funtion contarVocales
const contarVocales = (cadena) => {
    // Verifica si el dato ingresado es de tipo string
    if(typeof cadena === 'string'){
        // Convierte la cadena ingresada a minusculas
        const minString = cadena.toLowerCase()
        let contador = 0
        // Recorre la cadena 
        for(let i = 0; i < minString.length; i++){
            // Verifica si la letra es una vocal
            if(minString[i] === 'a' || minString[i] === 'e' || minString[i] === 'i' || minString[i] === 'o' || minString[i] === 'u'){
                // Si es una vocal aumenta el contador
                contador++
            }
        }
        // Retorna el contador
        return contador
        
    }else{
        // Si el dato ingresado no es de tipo string retorna un mensaje de error
        return('Error el dato ingresado no es una cadena de texto ...')
    }    
}

console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales(12122)); // Error no el dato ingresdo no es una cadena de texto
console.log(contarVocales("HOLA MUNDO")) // 4
console.log(contarVocales("Esta cadena de texto contiene muchas vocales ...")) // 17
console.log(contarVocales("HOLA MUNDO esta CADENA de TeXto Tinen vocales INTERcalaDas en miNusCUlas y MaYusCuLAS")) // 31
