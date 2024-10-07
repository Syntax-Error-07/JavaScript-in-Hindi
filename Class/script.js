//Class = A class in JavaScript is a blueprint for creating objects that encapsulates data (properties) and functions (methods) to operate on that data. It is defined using the 'class' keyword.

class Car{
    constructor(model,no,Year){
        this.model=model;
        this.no=no;
        this.Year=Year;
    }
    displayCar(){
        console.log(`Car model is ${this.model}
                    Car no is ${this.no}
                    Car Year is ${this.Year}`)
    }
}
let Car1= new Car("Honda",2876,2012);
let Car2= new Car("Thar",7777,2019);
Car1.displayCar();
Car2.displayCar();
