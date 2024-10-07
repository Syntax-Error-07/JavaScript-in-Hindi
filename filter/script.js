// Filter: filter(): A method that takes a function as an argument and returns a new array containing only the elements that meet the condition defined in the function


let numbers =[1,2,3,4,5,6,7,8,9,10];
let Even = numbers.filter(IsEven);
console.log(Even)
let Odd = numbers.filter(IsOdd);
console.log(Odd)
function IsEven(element){
    return element % 2 === 0;
}
function IsOdd(element){
    return element % 2 !== 0;
}