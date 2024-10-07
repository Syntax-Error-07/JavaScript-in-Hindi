//Getter: A getter is like a window that lets you see the value of a property inside an object. It's a way to get information without directly accessing the property. keyword "get"

//Setter: A setter is like a door that lets you change the value of a property inside an object. It's a way to update information in a controlled manner.keyword "set"

class Person{
    constructor(Firstname,LastName){
        this.Firstname=Firstname;
        this.LastName=LastName;
        this.fullName=`${this.Firstname} ${this.LastName}`
    }
    get FullName(){
    return this.fullName;
    }
    set FullName(value){
        this.fullName=value;
    }
}
const person = new Person("Syntax","Error");
person.FullName="Syntax bhai";
console.log(person.FullName)
