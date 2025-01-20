//Abstract class
abstract class Creature{
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  //Concrete method
  //Concrete methods are the methods that have a body and are implemented in the abstract class itself.
  eat(): void{
    console.log(`${this.name} eats food`);
  }

  //Abstract method
  //Abstract methods are the methods that are declared in the abstract class but are not implemented in the abstract class. The abstract methods must be implemented in the derived class.
  abstract makeSound():void;
}

//Subclass implementing the abstract method
class Doggo extends Creature{

  constructor(name: string) {
    super(name); //Calling the constructor of the parent class with name argument
  }

  //Implementing the abstract method
  makeSound(): void{
    console.log(`${this.name} barks`);
  }
}

const dog = new Doggo('Tommy');
dog.makeSound();
dog.eat();



/*
Explanation

Abstract Class:
The Animal class defines common properties (name) and behavior (eat).
The makeSound method is abstract and must be implemented by any subclass.

Dog Class:
The Dog class extends the Animal class and implements the makeSound method, which defines how a dog sounds.

Usage:
You cannot create an instance of an abstract class (Animal).
You can only create instances of concrete subclasses (Dog).
*/


