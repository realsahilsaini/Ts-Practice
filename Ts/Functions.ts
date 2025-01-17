//Functions
//Function types 
//Optional and Default Parameters
//Rest Parameters
//Overloads

function MsgCallback(msg: string, cb: (value: string)=> void): void{
  cb(msg);
}

// MsgCallback('Hello', (value: string)=>{
//   console.log(`Callback: ${value}`);
// })


//Optional Parameters
function OptionalParams(name: string, age?:number): void{
  console.log(name + ' ' + (age ? age : 'Age not provided'));
}

// OptionalParams('Sahil');

//Default Parameters
function DefaultParams(name: string, gender: string = "Not to be disclosed"): void{
  console.log(name + ' ' + gender);
}

// DefaultParams('Sahil', 'male');


//Rest Parameters
function sum(name: string, ...args: number[]): void{
  console.log(name + ' ' + args.reduce((acc, val)=> acc + val, 0));
}

// sum('Sahil', 1, 1, 1, 1, 1);


//Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any{
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  else if(typeof a === 'string' && typeof b === 'string'){
    return a + b;
  }
}

console.log(add(1, 2)); 
console.log(add('Hello', 'World'));
