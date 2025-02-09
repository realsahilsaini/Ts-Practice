interface PartialUser{
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type pickedProps = Pick<PartialUser, 'name' | 'age' | 'email'>;

type userOptional = Partial<pickedProps>;

function updateUser(obj: userOptional){
  console.log(obj);
}

updateUser({
  name: 'Sahil',
  age: 22,
  // email: 'xyz@gmail.com'
})
