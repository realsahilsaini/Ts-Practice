class BottleMaker{
  constructor(
    public name: string, public price: number, public color: string, public material: string
  ){

    
  }
}

let b1 = new BottleMaker('Milton', 1000,  'Red', 'metal');
let b2 = new BottleMaker('Cello', 500,  'Blue', 'plastic');

console.log(b1);
console.log(b2);


