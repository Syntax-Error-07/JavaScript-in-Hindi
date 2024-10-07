//console.log("hello");
/*let x=100;
let a,b,c;
a=76;
b="hello";
c=1.23;
console.log(a);
console.log(b);
console.log(c);*/

// ' "" `
let name="Syntax Error";
let age=25;
let sex="Male";
let height=5.11;

// console.log(`Your name is ${name}`);
// console.log(`Your age is ${age}`);
// console.log(`Your sex is ${sex}`);

document.getElementById("p1").textContent=`Your name is ${name}`;
document.getElementById("p2").textContent=`Your age is ${age}`;
document.getElementById("p3").textContent=`Your sex is ${sex}`;
document.getElementById("p3").textContent=`my height is: ${height}`;
