// simple user input
// let username;
// username=window.prompt("What is your name");
// console.log(username);



let username;
// professional input
document.getElementById('b1').onclick=function(){
    username=document.getElementById('input').value;
    document.getElementById('h1').textContent=`Welcome ${username}`;
    console.log(username);
}
