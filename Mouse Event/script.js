
const Mybox = document.getElementById("mybox");

Mybox.addEventListener("click",(event)=>{
    event.target.style.backgroundColor="red";
    event.target.textContent="Ouch! 😥";
})
Mybox.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="Yellow";
    event.target.textContent="Don't do it 😒";
})
Mybox.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor="lime";
    event.target.textContent="Click me 😁";
})



