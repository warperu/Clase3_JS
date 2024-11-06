/*
EJERCICIO 01
Gestión de Notas  de Estudiantes

Crear un programa que gestione las notas de los estudiantes de un curso
El programa debe permitir al usuario:

- Agregar un nuevo estudiante son nombre y calificación.
- Mostrar la lista de estudiantes con sus calificaciones
- Calcular el promedio de las calificaciones del curso
- Determinar cuántos estudiantes aprobaron (Calificacion >= 60) y cuantos desaprobaron
- El programa debe seguir pidiendo al usuario acciones hasta que decida salir
*/

// Inicializamos un array para almacenar los estudiantes
const estudiantes = [];

// Función para agregar un nuevo estudiante
function agregarEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const calificacion = parseFloat(prompt("Ingrese la calificación del estudiante:"));
    
    if (!isNaN(calificacion)) {
        estudiantes.push({ nombre, calificacion });
        console.log(`Estudiante ${nombre} con calificación ${calificacion} agregado.`);
    } else {
        console.log("Calificación inválida. Intente de nuevo.");
    }
}

// Función para mostrar la lista de estudiantes y sus calificaciones
function mostrarEstudiantes() {
    console.log("Lista de estudiantes:");
    estudiantes.forEach((est, index) => {
        console.log(`${index + 1}. ${est.nombre} - Calificación: ${est.calificacion}`);
    });
}

// Función para calcular el promedio de las calificaciones
function calcularPromedio() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes en la lista.");
        return;
    }

    const sumaCalificaciones = estudiantes.reduce((suma, est) => suma + est.calificacion, 0);
    const promedio = sumaCalificaciones / estudiantes.length;
    console.log(`El promedio del curso es: ${promedio.toFixed(2)}`);
}

// Función para contar los estudiantes aprobados y desaprobados
function contarAprobadosDesaprobados() {
    const aprobados = estudiantes.filter(est => est.calificacion >= 60).length;
    const desaprobados = estudiantes.length - aprobados;
    console.log(`Estudiantes aprobados: ${aprobados}`);
    console.log(`Estudiantes desaprobados: ${desaprobados}`);
}

// Función principal del programa
function iniciarPrograma() {
    let opcion;
    
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Agregar un nuevo estudiante\n" +
            "2. Mostrar lista de estudiantes\n" +
            "3. Calcular promedio del curso\n" +
            "4. Contar aprobados y desaprobados\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                agregarEstudiante();
                break;
            case "2":
                mostrarEstudiantes();
                break;
            case "3":
                calcularPromedio();
                break;
            case "4":
                contarAprobadosDesaprobados();
                break;
            case "5":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                break;
        }
    } while (opcion !== "5");
}

// Iniciar el programa
iniciarPrograma();

