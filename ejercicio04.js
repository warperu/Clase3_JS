/*
EJERCICIO 04
Crea una función que analice un conjunto de calificaciones y devuelva un objeto con información resumida: la calificación más alta, la más baja, la media y el número de aprobados.

Enunciado:

La función analizarCalificaciones debe tomar un parámetro calificaciones, que es un array de números.
La función debe devolver un objeto que contenga:
mayor: la calificación más alta.
menor: la calificación más baja.
media: la calificación media (promedio).
aprobados: la cantidad de calificaciones mayores o iguales a 60.
*/

function analizarCalificaciones(calificaciones) {
    if (calificaciones.length === 0) {
        return {
            mayor: null,
            menor: null,
            media: null,
            aprobados: 0
        };
    }

    const mayor = Math.max(...calificaciones);
    const menor = Math.min(...calificaciones);
    const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const media = suma / calificaciones.length;
    const aprobados = calificaciones.filter(calificacion => calificacion >= 60).length;

    return {
        mayor,
        menor,
        media,
        aprobados
    };
}


const calificaciones = [85, 72, 90, 45, 60, 88, 50];
const resumen = analizarCalificaciones(calificaciones);

console.log(resumen);

