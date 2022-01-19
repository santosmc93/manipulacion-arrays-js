const pets = ['cat', 'dog', 'bat'];

let includeArray=false
for(let i = 0; i<pets.length; i++){
    if(pets[i] === 'dog'){
        includeArray = true;
        break;
    }
}
console.log(includeArray);

// includes
const rta = pets.includes('dog')
console.log(rta);