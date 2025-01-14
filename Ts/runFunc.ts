function parentFunc(fn: ()=>void, delay: number){
    setTimeout(fn, delay);
}

function childFunc(){
  console.log('Child function');
}
parentFunc(childFunc, 5000);