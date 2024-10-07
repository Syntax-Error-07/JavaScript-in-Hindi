//This=The this keyword in JavaScript refers to the object that is executing the current code, which changes depending on where and how the code is called.

const car = {
    model:"jeep",
    no:2334,
    year:2012,
    show:function(){
        console.log(`The model is ${this.model}
                    the car no. is ${this.no}
                    the model year is ${this.year}`
        )
    }
}
car.show();