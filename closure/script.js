//A closure in JavaScript is when a function remembers and can access variables from the place where it was created, even after that place (or function) has finished executing.

function rememberNum(num){
    return function(){
        console.log(`The num is `+num);
    };
}
const showFive = rememberNum(5);
const showTen = rememberNum(10);
showFive();
showTen();