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

console.log(displayData<number>(10));
console.log(displayData<string>("Hello"));

/*
The <T> after the function name indicates that the function is a generic function. 
It can accept any type of data.

The <T> is a placeholder for the type that will be provided by the caller of the function.

The <datatype> is optional, if not provided then TypeScript will try to infer the type from the argument passed to the function.

displayData<string>("Hello") - Here, we are explicitly specifying the type of the argument as string.

displayData("Hello") - Here, we are not specifying the type of the argument. TypeScript will infer the type from the argument passed to the function.
*/

