console.log("Sintaxis y variables");

//var
var edad = 28;
edad = 30;

console.log(edad);

//let
let nombre = "Andrew";
nombre = "Diana"; 
console.log(nombre);

//const
const PI = 3.14159;
//PI = 3.14;
console.log(PI);


console.log("===================");

var saludo = "Hola mundo";
let nombres = 'Martha';
const mensaje = `Hola, ${nombres}`;
console.log(saludo);
console.log(mensaje);

console.log("===================");
var esEstudiante = true;
let mayorEdad = false;
const accesoPermitido = true;
console.log(esEstudiante, mayorEdad, accesoPermitido);

/*
nulos
*/
console.log("===================");
var resultado = null;
console.log(resultado);

/*
Indefinidos
*/
let valor;
console.log(valor);

/*
BigInt
*/
const numeroGrande = 90077199254800091n;
console.log(numeroGrande);

/*
Simbolo
*/
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2);

//operador ternario
let edadPersona = 20;
let mensajes = (edadPersona >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensajes);

// manejo de excepciiones: try catch, finally

try {
    let resultado = 10/0;
    console.log(resultado);
} catch (error){
    console.log("Se produjo un error:" + error.message);
}finally{
    console.log("Esto se ejecuta siempre, ocurra o no error");
}

/*
Etiquetas (Labels)
*/

outerLoop:
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(i === j){
            break outerLoop;
        }
    }
    console.log("i: ", i, "j: ", j);
}


/*
Escribe programa que solicite al usuario su edad y determine si es mayor o menor de edad. si es mayor de edad, 
mostrara un mensaje que puede ingresar, si es mejor, mostrara un mesaje indicando que no puede ingresar
*/

let edadUsuario = parseInt(prompt("Por favor, ingresa tu edad: "));

if(isNaN(edadUsuario)){
    console.log("Por favor, ingresa un  numero valido");
} else{
    if(edadUsuario >= 18){
        console.log("Eres mayor de edad, puedes ingresar :)");
    }else{
        console.log("Eres menor de edad, NO puedes ingresar :'(");
    }
}

/*
Crear un programa que pida al usuario el monto total de su compra y calcule el descuento segun el siguiente criterio:

- Si el monto es mayor a 100, se aplica un 10% de descuento.
- Si el monto es entre 50 y 100, se tiene un 5 % de descuento.
- Si el monto es menor a 50, no se aplica ningún descuento.
   
El programa debe mostrar el monto total con el descuento aplicado
*/

// Solicitar al usuario el monto total de su compra
let monto = parseFloat(prompt("Ingrese el monto total de su compra:"));

// Verificar que el valor ingresado es un número
if (isNaN(monto)) {
  console.log("Por favor, ingrese un monto válido.");
} else {
  // Variable para el descuento aplicadoS
  let descuento = 0;

  // Aplicar el descuento basado en el monto
  if (monto > 100) {
    descuento = 0.10; // 10% de descuento
  } else if (monto >= 50 && monto <= 100) {
    descuento = 0.05; // 5% de descuento
  }

  // Calcular el monto final con el descuento aplicado
  let montoConDescuento = monto - (monto * descuento);

  // Mostrar el resultado
  console.log(`El monto total con descuento aplicado es: S/ ${montoConDescuento}`);
}


/*
Crea un programa que pida al usuario ingresar las calificaciones de un grupo
de estudiantes. El usuario debe indicar cuántas calificaciones ingresará.
El programa calculará el promedio de las calificaciones y determinará si cada
estudiante está aprobado o desaprobado. Se considera que una calificación
de 60 o más es un aprobado.
*/


// Solicitar al usuario la cantidad de estudiantes y la cantidad de calificaciones por estudiante
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
let cantidadCalificaciones = parseInt(prompt("Ingrese la cantidad de calificaciones por estudiante:"));

// Verificar que las cantidades ingresadas son validas
if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0 || isNaN(cantidadCalificaciones) || cantidadCalificaciones <= 0) {
    console.log("Por favor, ingrese valores válidos para la cantidad de estudiantes y calificaciones.");
} else {
    // Arreglo para almacenar las calificaciones de todos los estudiantes
    let estudiantes = [];

    // Iterar sobre cada estudiante
    for (let i = 0; i < cantidadEstudiantes; i++) {
        console.log(`\nEstudiante ${i + 1}`);
        
        // Arreglo para almacenar las calificaciones de un solo estudiante
        let calificaciones = [];
        let sumaCalificaciones = 0;

        // Pedir las calificaciones del estudiante
        for (let j = 0; j < cantidadCalificaciones; j++) {
            let calificacion = parseFloat(prompt(`Ingrese la calificación ${j + 1} del estudiante ${i + 1}:`));
            
            // Validar que la calificación es un número válido
            if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
                console.log("Calificación inválida. Debe ser un número entre 0 y 100.");
                j--; // Repetir la misma calificación si el valor es inválido
            } else {
                calificaciones.push(calificacion); // Agregar la calificación al arreglo del estudiante
                sumaCalificaciones += calificacion; // Sumar la calificación
            }
        }

        // Calcular el promedio de calificaciones del estudiante
        let promedio = sumaCalificaciones / cantidadCalificaciones;
        let estado = promedio >= 60 ? "Aprobado" : "Desaprobado";

        // Agregar el promedio y el estado del estudiante al arreglo principal
        estudiantes.push({
        calificaciones: calificaciones,
        promedio: promedio,
        estado: estado
        });
    }

    // Mostrar los resultados para cada estudiante
    console.log("\nResumen de Resultados:");
    estudiantes.forEach((estudiante, index) => {
        console.log(`Estudiante ${index + 1}: Calificaciones = [${estudiante.calificaciones.join(", ")}], Promedio = ${estudiante.promedio.toFixed(2)}, Estado = ${estudiante.estado}`);
    });
}


//FUNCIONES EN JS
/*
Sintaxis
*/

function nombreFuncion(param1, param2) {
    // Cuerpo de la función
    return resultado; 
}


function sumarNumeros (a, b) {
    return a + b;
}

console.log(sumarNumeros(5, 10)); //Salida: 15
