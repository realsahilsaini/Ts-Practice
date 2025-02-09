// type readOnlyUser = {
//   readonly name: string;
//   readonly age: number;
//   readonly email: string;
// }


// const user:readOnlyUser ={
//   name: 'John',
//   age: 25,
//   email: 'xyz@email.com'
// }

// user.age = 23; // Error: Cannot assign to 'age' because it is a read-only property.


//OR

//Here we don't need to write readonly keyword multiple times
type readOnlyUser = {
    name: string;
    age: number;
    email: string;
  }
  
  
  const user: Readonly<readOnlyUser> ={
    name: 'John',
    age: 25,
    email: 'xyz@email.com'
  }
  
  user.age = 23; // Error: Cannot assign to 'age' because it is a read-only property.
