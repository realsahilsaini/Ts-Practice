interface Flyable {
    fly(): void;
}

abstract class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract fly(): void; // Method from the interface

    eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

class Sparrow extends Bird {
    fly(): void {
        console.log(`${this.name} is flying like a sparrow.`);
    }
}

// Usage
const mySparrow = new Sparrow("Jack");
mySparrow.eat();   // Output: Jack is eating.
mySparrow.fly();   // Output: Jack is flying like a sparrow.
