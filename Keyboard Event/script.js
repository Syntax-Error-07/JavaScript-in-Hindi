const emoji = document.getElementById("mybox");
const Move = 100;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= Move;
                break;
            case "ArrowDown":
                y += Move;
                break;
            case "ArrowLeft":
                x -= Move;
                break;
            case "ArrowRight":
                x += Move;
                break;
        }
        emoji.style.top =`${y}px`;
        emoji.style.left =`${x}px`;
    }

});

