//Destructuring in JavaScript is like unpacking a box of toys. Instead of taking each toy out one by one, you can just open the box and all the toys come out at once.It's a way to extract values from arrays or objects and assign them to variables in a simpler way.array=[],object={}

const Person ={
    Name:"Syntax bhai",
    Age:22,
    Sex:"Male"
}
const {Name,Sex}=Person;
console.log(Name)
console.log(Sex)

