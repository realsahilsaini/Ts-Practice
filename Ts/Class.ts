//Calsses and Objects 
//Class definition 
//Contructors 
//Access modifiers (public, private, protected)
// Read only properties
//Optional Properties
//Parameter properties
//Getters and Setters
//Static members
//Abstract classes and methods

class BottleMaker{
  constructor(
    public name: string, public price: number, public color: string, public material: string
  ){

    
  }
}

let b1 = new BottleMaker('Milton', 1000,  'Red', 'metal');
let b2 = new BottleMaker('Cello', 500,  'Blue', 'plastic');

console.log(b1);
console.log(b2);

//this Keyword
class Person{
  constructor(public name: string, public age: number){
    console.log(this.name + ' ' + this.age);
  }
}




