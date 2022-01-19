const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [11, 12]]],
    [7, 8, 9]
];

let newArray = []
for(let i=0; i<matriz.length; i++){
    const fila = matriz[i];
    for(let j=0; j<fila.length;j++){
        newArray.push(matriz[i][j]);
    }
}

console.log(newArray);

// Solucion con Flat
const rta = matriz.flat(3);
// Flat nos ayuda a tener en un solo array a partir de varios arrays anidados, como un ejemplo, una matriz.
console.log(rta);
