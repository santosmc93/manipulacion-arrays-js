// Filter
const words = ['sprayhuuuuuuu', 'limit', 'elite', 'exuberant'];

// FOR 
const newArray = [];
for(let i=0; i<words.length; i++){
    if(words[i].length >= 6){ // Si la palabra en la posicion i es mayor a 6 letras, entonces
        newArray.push(words[i]);    // Se agrega al nuevo array
    }
}

console.log("nuevo array que cumple con la condicion: " + newArray);
// Filter
const rta = words.filter(item => item.length >= 6)
// Crea un nuevo array para los elementos que cumplan con la condicion.
console.log('array con filter: ' + rta);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const rta2 = orders.filter(item => item.delivered == true && item.total >= 100);
  console.log(rta2);