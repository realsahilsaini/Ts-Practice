interface PickUser{
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

// Here we have an interface PickUser with 5 properties. We want to create a new type that only has 3 properties from the PickUser interface. We can use the Pick utility type to do this.
type UpdatePickUser = Pick<PickUser, 'id' | 'name' | 'age'>;

function PickedUser(obj: UpdatePickUser){
  console.log(obj);
}


PickedUser({
  id: '1',
  name: 'Sahil',
  age: 22
})

