// Calculadora delas 4 Operaciones Básicas

/**
 * Calcular la suma de dos valores ingresados por el usuario.
 * @param {*} valor1 primer valor ingresado por el usuario
 * @param {*} valor2 segundo valor ingresado por el usuario
 */
 const funcion_suma = (valor1,valor2) => {
    const suma= valor1+valor2
    console.log("El total de la suma de ",valor1," y ",valor2," es: ", suma)
}

/**
 *Calcular la resta de dos valores ingresados por el usuario.
 * @param {*} valor1 primer valor ingresado por el usuario 
 * @param {*} valor2 segundo valor ingresado por el usuario
 */
const funcion_resta = (valor1,valor2) => {
    const resta= valor1-valor2
    console.log("El total de la resta de ",valor1," y ",valor2," es: ", resta)
}
/**
 * Calcular la multiplicación de dos valores ingresados por el usuario.
 * @param {*} valor1 primer valor ingresado por el usuario
 * @param {*} valor2 segundo valor ingresado por el usuario
 */
const funcion_multiplicacion = (valor1,valor2) => {
    const multi= valor1*valor2
    console.log("El total de la multiplicación de ",valor1," y ",valor2," es: ", multi)
}

/**
 * Calcular la división de dos valores ingresados por el usuario.
 * @param {*} valor1 primer valor ingresado por el usuario
 * @param {*} valor2 segundo valor ingresado por el usuario
 */
const funcion_division = (valor1, valor2) => {
    if (valor2==0){
        console.log("No se pueden dividir números entre 0")
    }
    else{
        const div= valor1/valor2
        console.log("El total de la división de ",valor1," y ",valor2," es: ", div)
        
    }
}

var n = funcion_suma(2,3)
var n = funcion_resta(4,7)
var n = funcion_multiplicacion(7,8)
var n = funcion_division(8,0)