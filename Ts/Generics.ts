//Generics 
//Generic Functions
//Generic Interfaces
//Generic Classes


//Generic Functions
//this function can accept any type of data

function display<T>(arg: T): T {
    return arg;
}

// console.log(display<number>(10));
// console.log(display<string>("Hello"));


// ------------------------

function displayData<T>(arg: T): T {
    return arg;
}

// console.log(displayData<number>(10));
// console.log(displayData<string>("Hello"));

/*
The <T> after the function name indicates that the function is a generic function. 
It can accept any type of data.

The <T> is a placeholder for the type that will be provided by the caller of the function.

The <datatype> is optional, if not provided then TypeScript will try to infer the type from the argument passed to the function.

displayData<string>("Hello") - Here, we are explicitly specifying the type of the argument as string.

displayData("Hello") - Here, we are not specifying the type of the argument. TypeScript will infer the type from the argument passed to the function.
*/

// ------------------------

//Generic Interfaces
//Generic interfaces are interfaces that can work with any data type.

interface genericInterface<T>{
  name: string;
  age: number;
  key:  T; 
}

let myGenericInterface: genericInterface<string> = {
  name: "John",
  age: 25,
  key: "Hello"
}

// console.log(myGenericInterface);


// ------------------------

//Generic Classes
//Generic classes are classes that can work with any data type.

class GenericClass<T>{
    private val: T;
    constructor(val: T){
        this.val = val;
    }
    getVal(): T{
        return this.val;
    }
}

let myGenericClass1 = new GenericClass<string>("Hello");

console.log(myGenericClass1.getVal()); //Hello

let myGenericClass2 = new GenericClass<number>(10);

console.log(myGenericClass2.getVal()); //10