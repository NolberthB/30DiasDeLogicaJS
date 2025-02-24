

//Invertir una cadena de texto
function invertirCadena(cadena){
    // Valida si la cadena es un string
    if(typeof cadena === 'string'){
        // Convierte la cadena en un array, lo invierte y lo convierte en una cadena
         return cadena.split().reverse().join()
    }else{
        // Si no es un string, retorna un mensaje de error
        return "Error: No es una cadena de texto"
    }
}

console.log(invertirCadena("javascript")); // Debería imprimir "tpircsavaj"
console.log(invertirCadena("30DiasDeLogicaJS")); // Ejemplo: "SJacigolEdsaiD03"
console.log(invertirCadena(12345)); // Debería imprimir un mensaje de error