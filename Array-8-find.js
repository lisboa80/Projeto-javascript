

// .find = serve para encontrar um elemento dentro do array.

const users = [
  { name: 'João', age: 600 },
  { name: 'Maria', age: 900 },
  { name: 'Carlos', age: 300 },
  { name: 'Vanessa', age: 300 }
]

const findUser = users.find(user => user.name === 'Maria')

console.log(findUser) // { name: 'Maria', age: 900 }