                                /*F=((9/5)*C) + 32;
                                C=(F- 32)* 5/9;*/

function conversion(){
    const num= document.getElementById("num");
    const CelsiusTo= document.getElementById("CelsiusTo");
    const FarhrenheitTo= document.getElementById("FarhrenheitTo");
    const result1= document.getElementById("result1");
    const result2= document.getElementById("result2");
    let temp=Number(num.value);
    let temp2;
    if(CelsiusTo.checked){
       temp2=((9/5)*temp) + 32;
        result1.textContent=`Celsius ==> Farhrenheit`;
        result2.textContent=`The result is ${temp2}`;
    }
    else if(FarhrenheitTo.checked){
        temp2=(temp- 32)* 5/9;
        result1.textContent=`Farhrenheit ==> Celsius`;
        result2.textContent=`The result is ${temp2}`;
    }
    else{
        result2.textContent=`Invalid Input`;
    }

}                               