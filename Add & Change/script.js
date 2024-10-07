const H1 = document.createElement("h1")

H1.textContent ="There are 4 boxes";
H1.id= "my id"
H1.style.color = "red"
//document.body.prepend(H1)

const Box1 = document.getElementById("box4").prepend(H1)

const Boxes = document.querySelectorAll(".box")
document.body.insertBefore(H1,box2)

const parabox = document.getElementById("BOX2");
BOX2.textContent="Changed"

