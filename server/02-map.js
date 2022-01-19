const letter = ['a', 'b', 'c'];

const newArray = letter.map(item => item + "++");
// .map lo que hace es recorre un array y hace una copia de el, esto para que puedas cambiar los valores del array original, como es un nuevo array entonces hay que guardarlo en una nueva variable

console.log("array original: " + letter);
console.log("nuevo array: " + newArray)