//constructor =In JavaScript, a constructor is a special method used in classes to create and initialize objects. The constructor method is automatically called when a new instance of the class is created using the new keyword.

function Car(model,no,year){
    this.model=model;
    this.no=no;
    this.year=year;
}

const car1 = new Car("jeep",2043,2011)
const car2 = new Car("van",2343,2008)
const car3 = new Car("Truck",2222,2021)

console.log(car1);
console.log(car2);
console.log(car3);
