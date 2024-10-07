//Inheritance in JavaScript means that one object can get properties and methods (functions) from another object. This allows us to reuse code and create objects that share common behaviors.

class Animal{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
     run(){
       console.log(`${this.name} can run`);
    }
    swim(){
        console.log(`${this.name} can swim`);
    }
    Type(){
        console.log(`${this.name} is a ${this.type} animal`)
    }
}
class dog extends Animal{
    swim(){
        console.log(`${this.name} can't swim`);
    }
}
class fish extends  Animal{
    run(){
        console.log(`${this.name} can't run`);
     }
}
let Dog = new dog("tommy","land");
let Fish = new fish("goldy","water");

Dog.run()
Dog.swim()
Dog.Type()
Fish.run()
Fish.swim()
Fish.Type()
