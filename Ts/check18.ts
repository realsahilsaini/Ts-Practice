function isAdult(age: number): boolean{
  if(age>=18){
    return true;
  }else{
    return false;
  }
}

let adult: boolean = isAdult(20);
console.log(adult); //true
