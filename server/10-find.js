const numbers = [1, 30, 49, 29, 10, 13];

// Metodo For
let rta = undefined;
for(let i=0;i<numbers.length;i++){
    if(numbers[i] === 30){
        rta = numbers[i];
        break;
    }
}

console.log(rta);

const rta2 = numbers.find(item => item === 30);
// Find devuelve solo un valor, el primer valor que encuentre en el array que cumpla la condicion.
console.log(rta2);

// Existe una variante de find que es el findIndex, el cual nos regresa la posicion de donde se encuentra el elemento que estamos buscando por la condicion.
const rta3 = numbers.findIndex(item => item === 30);
console.log("El elemento que estas buscando se encuentra en la posicion: " + rta3);