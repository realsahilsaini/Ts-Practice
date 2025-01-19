//Type Assertion
//Type Casting 
//Non-null assertion operator

//Type Assertion
//Type assertion is a way to tell the compiler “trust me, I know what I’m doing.”
//Type assertion is like type casting in other languages, but it performs no special checking or restructuring of data.
//Type assertions have two forms. One is the “angle-bracket” syntax:
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;
console.log(strLength1);

//The other is the as-syntax:
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
console.log(strLength2);

//Type Casting
//Type casting is a way to convert a variable from one data type to another data type.
//Type casting is also called Type conversion.

//Type casting can be done in two ways:
//Implicit Type Casting
//Explicit Type Casting

//Implicit Type Casting
//Implicit type casting is done by the compiler in a type-safe manner.
//For example, assigning an integer value to a floating-point variable.
let num1: number = 10;
let num2: number = 20.5;
num1 = num2;
console.log(num1);

//Explicit Type Casting
//Explicit type casting is done by users in a non-type-safe manner.
//For example, assigning a floating-point value to an integer variable.
let num3: number = 10;
let num4: number = <number>20.5;
console.log(num4);

//Non-null assertion operator

//The non-null assertion operator is represented by an exclamation mark (!).
//It is used to tell the compiler that the value of the variable will not be null.
let str: string | null = "hello";
console.log(str!);
