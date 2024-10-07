let button = document.getElementById("random");
let num = document.getElementById("lable");
let randomNumber;
let min = 1;
let max = 6;

button.onclick=function(){
    randomNumber=Math.floor((Math.random()*max)+min);
    num.textContent=randomNumber;
}