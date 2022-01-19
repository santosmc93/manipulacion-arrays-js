const numbers = [1, 3, 4, 2, 1, 1];

let rta = true;

// Version con for
for(let i = 0; i < numbers.length ; i++){
    if (numbers[i] >=40){
        rta=false;
    }
}
console.log(rta);

// Version con every
const rta2 = numbers.every(item => item<=40);
// Evalua que todos los elementos del array cumplan con la condicion definida, este regresa un true o false
console.log(rta2);

// RETO
const team = [
    {
      name: "Nicolas",
      age: 120,
    },
    {
      name: "Andrea",
      age: 80,
    },
    {
      name: "Zulema",
      age: 20,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta3 = team.every(item => item.age >= 18);
  console.log(rta3);