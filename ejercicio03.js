/*
EJERCICIO 03

Crea una función que genere un array de números aleatorios.

Enunciado:

La función generarNumerosAleatorios debe tomar dos parámetros: cantidad (número de elementos a generar) y rango (un objeto que define el rango de los números aleatorios con propiedades min y max).
La función debe devolver un array con los números aleatorios generados.

*/

function generarNumerosAleatorios(cantidad, rango) {
    const numeros = [];
    
    for (let i = 0; i < cantidad; i++) {
        // Genera un número aleatorio entre min y max, y lo agrega al array
        const numeroAleatorio = Math.floor(Math.random() * (rango.max - rango.min + 1)) + rango.min;
        numeros.push(numeroAleatorio);
    }
    
    return numeros;
}


const cantidad = 5;
const rango = { min: 1, max: 100 };

const numerosAleatorios = generarNumerosAleatorios(cantidad, rango);
console.log(numerosAleatorios);