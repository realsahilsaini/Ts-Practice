//Interfaces and Type Aliases
//Defining Interface 
//Using Interfaces to define the structure of an object
//Extending interfaces
//Types Aliases
//Intersection types


//Interface 

//It is a way to define a structure of an object
interface Person {
    name: string;
    age: number;
    gender?: string;
}

function getDataofUser(obj: Person){
    //code
}

getDataofUser({name: 'Sahil', age: 22, gender:'Male'});


//If two interface have the same name then it will merge the properties of both interfaces

interface sameName{
    name: string;
}

interface sameName{
  age: number;
}

function getData(obj: sameName){
  //code
}

getData({name: 'Sahil', age: 22});

//Extending Interfaces

interface Employee extends Person {
    empId: number;
}

function getEmployeeData(obj: Employee){
  //code
}

getEmployeeData({name: 'Sahil', age: 22, empId: 1234});

//Type Aliases
//Type aliases are a way to give a type a name

type word = string;
type num = number;

let wordVariable: word = 'Hello';
let numVariable: num = 22;

// ------------

type customType = string | number | null;

let customVariable: customType;

// ------------

type customUser = {
    name: string;
    age: number;
}

function getCustomUserData(obj: customUser){
  //code
}


//Intersection and Union

//Union
type unionType = string | number;

let unionVariable: unionType = 22;

// ----------------

//Intersection

type User = {
    name: string;
    age: number;
} 

type Admin = User & {
    getDetails(user: string): void;
}

function getAdminData(obj: Admin){
  obj.age;
  obj.name;
  obj.getDetails('Sahil');
}


//Difference between Interface and Type 

/*
type abcd = number;
type abcd = string; //Error

Interface abcd {
  name: string;
}

Interface abcd {
  age: number;
}

type - Used for primitive types, union, intersection, tuples.

Interface - Used for objects.
*/


type GoodUser = {
    name: string;
    age: number;
    good: boolean;
}

type BadUser = {
    name: string;
    age: number;
    bad: boolean;
}

//Intersection
//Intersection: An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.
type IntersectionUser = GoodUser & BadUser;

let intersectionUser: IntersectionUser = {
    name: 'Sahil',
    age: 22,
    good: true,
    bad: false
}

//Union
//Union:  A union type describes a value that can be one of several types.
//Here you can have properties of GoodUser or BadUser also you can have properties of both GoodUser and BadUser
type UnionUser = GoodUser | BadUser;

let unionUser1: UnionUser = {
    name: 'Sahil',
    age: 22,
    good: true,
    bad: false
}

console.log(unionUser1);




