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

//Extending Interfaces

interface Employee extends Person {
    empId: number;
}

function getEmployeeData(obj: Employee){
  //code
}

getEmployeeData({name: 'Sahil', age: 22, empId: 1234});
