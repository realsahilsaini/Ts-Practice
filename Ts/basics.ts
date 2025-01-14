//Basic Types 
//Primitive Types (number, string, boolean)
//Arrays 
//Tuples
//Enums
//Any, Unknown,Void, Null, Undefined, Never

//Primitive and Refrence Types

//Primitive Types
//Here the value is stored in the memory location

let a = 12;
let b = a;
b = 13;
// console.log(a); //12

//Refrence Types
//Here the memory location is stored in the memory location
let c = [1,2,3];
let d = c;
d.push(4);
// console.log(c); //[1,2,3,4]


//Array

//Array of only number
let arr1: number[]= [1,2,3,4,5]



//Tuples

//Tuple is a fixed length array where each element has a fixed type
let tup: [number, string] = [1, 'a']

// let tup2: [number, string] =['a', 2] //Error


//Enums (Enumerations)
//Enums allow us to define a set of named constants i.e. a collection of related values that can be numeric or string values.

enum UserRoles{
    ADMIN = 'admin', 
    USER = 'user',
    GUEST = 'guest',
    SUPER_ADMIN = 'super_admin'
}

let userRole: UserRoles = UserRoles.ADMIN

// console.log(userRole) //admin;



enum StatusCodes{
    OK = 200,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
    FORBIDDEN = 403
}

let statusCode: StatusCodes = StatusCodes.OK

// console.log(statusCode) //200;


//Any, Unknown,Void, Null, Undefined, Never

//Any
//Any is a type that can hold any type of value
let anyValue: any = 12;
anyValue = 'a';
anyValue = [1,2,3,4]
anyValue = {name: 'a', age: 12}

// console.log(anyValue);


//Unknown
//Unknown is a type that is more restrictive than any.
//It is used to represent the values that we don't know.
let unknownValue: unknown = 12;
unknownValue = 'a';
unknownValue = [1,2,3,4]
unknownValue = {name: 'a', age: 12}

// unknownValue.toUpperCase(); //Error: Property 'toUpperCase' does not exist on type 'unknown'.

// console.log(unknownValue); \


//Void
//Void is a type that represents the absence of a type.
//It is used to represent the functions that do not return a value.
function greet(): void{
    console.log('Hello World');
}

//Null and Undefined
//Null and undefined are two primitive types in TypeScript.
let nullValue: null = null;
let undefinedValue: undefined = undefined;

//Never 
//Never is a type that represents the values that never occur. (never returns)
function neverFunc():never{
  while(true){
    console.log('Hello World');
  }
}

neverFunc(); //Infinite loop
console.log('Hello World'); //This will never be executed becuase function isn't returning anything







