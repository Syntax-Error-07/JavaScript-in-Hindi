// Map : The map method in JavaScript is used to create a new array by applying a function to each element of an given array. It doesn’t change the original array.

let numbers= [1,2,3,4,5]

let cubes = numbers.map(cube);
console.log(cubes);
console.log(numbers)
function cube(element){
    return Math.pow(element,3);
}