const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements]; // new array tiene los mismos datos y longuitud ue elements, es una copia directa.

for(let i=0; i<othersElements.length; i++){
    newArray.push([othersElements[i]]); 
}

console.log(newArray);

// Concat
const array2 = elements.concat(othersElements);
console.log(array2);