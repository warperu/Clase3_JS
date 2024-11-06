/*

EJERCICIO 02
Crea una función que verifique si una palabra o frase es un palíndromo.
La función esPalindromo debe tomar un parámetro texto.
La función debe devolver true si el texto es un palíndromo y false en caso contrario.
*/

function esPalindromo(texto) {
    // Convertimos el texto a minúsculas y eliminamos espacios y caracteres especiales
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Invertimos el texto limpio
    const textoInvertido = textoLimpio.split('').reverse().join('');
    
    // Comparamos el texto limpio con su versión invertida
    return textoLimpio === textoInvertido;
}

console.log(esPalindromo("A man, a plan, a canal, Panama"));  // true
console.log(esPalindromo("Radar"));                           // true
console.log(esPalindromo("Hello World"));                     // false
