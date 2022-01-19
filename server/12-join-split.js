const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let rtaFinal= '';

for(let i=0;i<elements.length;i++){
    rtaFinal += elements[i] + separator;
}

const rta2 = elements.join('--');
console.log(rtaFinal);
console.log(rta2);

// Otro metodo visto en esta clase es el Split, que conviete nuestro string en un array dependiendo de la condicion o separador que le indiquemos.

let title = 'Hola Mundo Estoy Aprendiendo Desarrollo Web';
const arrayString = title.split(' ');
console.log(arrayString);
