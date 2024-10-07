const Dec =document.getElementById("Decrease");
const RE =document.getElementById("Reset");
const Inc =document.getElementById("Increase");
let a=0;

Dec.onclick=function(){
    a--;
    document.getElementById("counter").textContent=a;
}
RE.onclick=function(){
    a=0;
    document.getElementById("counter").textContent=a;
}
Inc.onclick=function(){
    a++;
    document.getElementById("counter").textContent=a;
}