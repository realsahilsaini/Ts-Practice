//You can type objects like follows - 
// type MapUser = {
//     id: string;
//     name: string;
//     age: number;
// }

// type MapUsers = {
//   [key: string]: MapUser;
// }


// const mapsUsers: MapUsers = {
//   'id1':{
//     id: '1',
//     name: 'Sahil',
//     age: 22
//   },
//   'id2':{
//     id: '2',
//     name: 'Aaradhya',
//     age: 13
//   }
// }

// console.log(mapsUsers['id1'].name) // Sahil


//Using Record
type MapUser = {
    id: string;
    name: string;
    age: number;
}

//Syntax: Record<keyType, valueType>
const mapsUsers: Record<string, MapUser> = {
  'id1':{
    id: '1',
    name: 'Sahil',
    age: 22
  },
  'id2':{
    id: '2',
    name: 'Aaradhya',
    age: 13
  }
}

console.log(mapsUsers['id1'].name) // Sahil

//Using Map
const mapUsers = new Map();
mapUsers.set('id1', {
  id: '1',
  name: 'Sahil',
  age: 22
})
mapUsers.set('id2', {
  id: '2',
  name: 'Aaradhya',
  age: 13
})


console.log(mapUsers.get('id1').name) // Sahil
