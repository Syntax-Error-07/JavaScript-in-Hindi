// Function Expressions =The function can be assigned to a variable, passed as an argument, or returned from another function.

let numbers = [ 1,2,3,4,5]
let cubes = numbers.map(function (element){
    return Math.pow(element,3)
})
console.log(cubes)
