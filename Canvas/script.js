let Canvas = document.getElementById("myCanvas");
let brush = Canvas.getContext("2d");

brush.beginPath();
brush.moveTo(0,0);
brush.lineTo(250,250);
brush.moveTo(500,0);
brush.lineTo(250,250);
brush.moveTo(250,250);
brush.lineTo(250,500);
brush.stroke();