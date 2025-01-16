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

// console.log(b1);
// console.log(b2);

//this Keyword
class Person{
  constructor(public name: string, public age: number){
    console.log(this.name + ' ' + this.age);
  }
}


//Public & Private Access Modifiers
class PersonAM{
  constructor(private name: string, private age: number){
    console.log(this.name + ' ' + this.age);
  }
}

// let p1 = new PersonAM('Sahil', 22);
// console.log(p1.name); //Error


//Readonly Properties
class PersonReadOnly{
  constructor(public name: string, public readonly age: number){
  
  }

  changeName(){
    this.name = 'Sahil'; //Error
  }
}

let readonlyPerson = new PersonReadOnly('Sahil', 22);
// readonlyPerson.changeName('Aadi'); //Error: Cannot assign to 'name' because it is a read-only property.

// console.log(readonlyPerson);


//Optional Properties
class PersonOptionalProps{
  constructor(public name: string, public age?: number){

  }
}

let optionalPerson = new PersonOptionalProps('Sahil');
console.log(optionalPerson);

//Parameter Properties
class PersonParamProps{
  constructor(public name: string, public age: number){

  }
}
//Here the properties are declared in the constructor itself and not outside the constructor like in the above example 




