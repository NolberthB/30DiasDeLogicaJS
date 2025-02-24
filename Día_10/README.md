
```markdown
# Día 10: Número Fibonacci

## Objetivo  
Crea una función que, dado un número `n`, retorne el n-ésimo número de la secuencia Fibonacci. Este ejercicio te ayudará a practicar la recursión y la optimización en algoritmos.

## Instrucciones  
1. Crea un archivo llamado `fibonacci.js` dentro de la carpeta `Día10/`.  
2. Define una función llamada `fibonacci` que reciba un parámetro `n` (entero mayor o igual a 0).  
3. La función debe retornar el n-ésimo número en la secuencia Fibonacci, donde:
   - Fibonacci(0) = 0  
   - Fibonacci(1) = 1  
   - Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2) para n > 1  
4. Asegúrate de manejar casos inválidos (por ejemplo, números negativos o parámetros no numéricos) retornando un mensaje de error.  
5. Comenta el código para explicar la lógica y, si es posible, menciona cualquier mejora (como memoización) para optimizar la solución.

## Ejemplo  
```javascript
console.log(fibonacci(0)); // Debería imprimir 0
console.log(fibonacci(1)); // Debería imprimir 1
console.log(fibonacci(7)); // Debería imprimir 13
