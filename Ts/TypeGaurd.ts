//Type Gaurds and Typescript Utility Types
//Using typeof and instanceof
//Partial, Required, Readonly

//Type Gaurds
//Type guards are some expression that performs a runtime check that guarantees the type in some scope.
//Type guards are used to narrow down the type of a variable within a conditional block. (Type Narrowing)

function abcd(arg: string | number){
  if(typeof arg === "string"){
    console.log(arg.toUpperCase());
  }
  else if(typeof arg === "number"){
    console.log(arg.toFixed(2));
  }
  else{
    throw new Error("The argument is neither a string nor a number");
  }
}

abcd(10);
abcd("hello");
// abcd(true); //This will throw an error as the argument is neither a string nor a number


//Using instanceof
class TvRemote{
  turnOn(){
    console.log("TV is turned on");
  }

  turnOff(){
    console.log("TV is turned off");
  }
}

class CarRemote{
  start(){
    console.log("Car is started");
  }

  stop(){
    console.log("Car is stopped");
  }
}

const tv = new TvRemote();
const car = new CarRemote();

function swtitchOn(remote: TvRemote | CarRemote){
  if(remote instanceof TvRemote){
    remote.turnOn();
  }
  else if(remote instanceof CarRemote){
    remote.start();
  }
}

swtitchOn(tv);
swtitchOn(car);

