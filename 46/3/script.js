var animal = {
    species: "dog",
    name: "Bert",
    age: 5
}

console.log(animal)
console.log(animal.species)
console.log(animal.name)
console.log(animal.age)

//1
console.log(animal.age + 1)

//2
function changeDogAge() {
    return animal.age + 1
}
console.log(changeDogAge())