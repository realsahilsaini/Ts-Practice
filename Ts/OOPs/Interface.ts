//Interface 
interface Flyable{
    fly(): void;
}

interface Swimmable{
    swim(): void;
}

//A class implementing multiple interfaces  
class Duck implements Flyable, Eatable{
  fly(): void{
    console.log('Duck is flying');
  }

  swim(): void{
    console.log('Duck is swimming');
  }
}

const ducky = new Duck();
ducky.fly();
ducky.swim();

/*
Explanation

Interfaces:
Flyable and Swimmable define two separate behaviors (fly and swim).
They ensure that any class implementing them provides these methods.

Duck Class:
Implements both Flyable and Swimmable, providing implementations for the fly and swim methods.

Usage:
The Duck class can be treated as both Flyable and Swimmable.
*/