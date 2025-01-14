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


