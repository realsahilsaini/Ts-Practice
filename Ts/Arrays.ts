//Arrays

// Write a program that creates an array of the following elements, then prints the array to the console

//Code:
let fruits: string[] = ["apple", "banana", "mango", "orange"];

console.log(fruits);



//Write a program to find max in the given array
let numbers: number[] = [234,5,6898,257,137];

function getMax(numbers: number[]): number {
  let max: number = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// console.log(getMax(numbers));


//-------------------------------------

interface Address{
  city: string;
  pincode: string;
}

interface UserArr{
  name: string; 
  number: number;
  // address:{
  //   city: string;
  //   pincode: string;      
  // } [];
  //Or
  address: Address[];
}

let userArr: UserArr = {
  name: "John",
  number: 1234567890,
  address: 
    [{
      city: "Bangalore",
      pincode: "560001"
    },
  {
    city: "Mumbai",
    pincode: "4000608"
  }]
}


//-------------------------------------
//Given a list of users out of the users that are legal (greater than 18yrs of age)

interface LegalUser{
  firstName: string;
  lastName: string;
  age: number;
}

let users: LegalUser[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 15
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    age: 30
  }
]

function getLegalUsers(users: LegalUser[]): LegalUser[] {
  let getLegalUsers: LegalUser[] = [];
  for(let i=0; i<users.length; i++){
    if(users[i].age > 18){
      getLegalUsers.push(users[i]);
    }
  }
  return getLegalUsers;
}

console.log(getLegalUsers(users));