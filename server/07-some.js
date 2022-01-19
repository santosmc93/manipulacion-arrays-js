const numbers = [1, 2, 3, 5];

// Version FOR
let rta = false;
for(let i=0; i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        rta = true
        break;
    }
}

console.log(rta);

const rta2 = numbers.some(item => item %2 === 0)
// Evalua que al menos uno de los elementos en el array cumplan con una condicion definida. este metodo regresa true o false
console.log(rta2);