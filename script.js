/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

Entregad vuestra solución por classroom. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones. Podéis enviar una primera solución y luego añadir otras en comentarios.*/


//ejercicio 1 en caso de que haya que diferenciar mayusculas de minusculas (estrictamente iguales)
function contarOcurrencias(letra,frase) {

    let contador = 0;
  
    for (let i = 0; i < frase.length; i++) {
     
      if (frase[i] === letra) {
        contador++
      }
    }
  
    return contador
  }


//ejercicio 1 en caso de que solo interese la letra sin ser caseSensitive
function contarOcurrencias(letra,frase) {

    let contador = 0;
  
    let minusfrase = frase.toLowerCase()
    let minusletra = letra.toLowerCase()
  
    for (let i = 0; i < minusfrase.length; i++) {
     
      if (minusfrase[i] === minusletra) {
        contador++
      }
    }
  
    return contador
  }
  
  
  //ejercicio 2 
  function dameImpares() {
  
    const numeroUsuario = parseInt(prompt("Por favor, ingresa un número:"));

    if (!isNaN(numeroUsuario)) {
    
        for (let i = numeroUsuario; i < numeroUsuario + 50; i++) {
            if(i % 2 !== 0){
                console.log(i);
            }
        }  
    }
}