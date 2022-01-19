// REDUCE
const totals = [1, 2, 3, 4];

// For
let acum = 0;
for(let i=0; i<totals.length;i++){
    acum += totals[i];
}
console.log(acum);

// Reduce
const rta = totals.reduce((acum, item) => acum + item, 0); // Este metodo necesita dos parametros para trabajar, el primero es la arrow function y el segundo, separado con una coma es el estado inicial del acumulador.
// el arrow function de este metodo necesita dos parametros(acumulador, elementoDelArray), despues sumamos el acumulador + elementoDelArray
console.log(rta);