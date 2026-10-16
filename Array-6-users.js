
// so vai da verdadeira se todos os elementos do array atenderem a condicao.

const user = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 }
]

const isTrue = user.every(user => user.credit > 300)

console.log(isTrue) // false


/*  

 true a mudanca de every pra some 

const isTrue = user.some(user => user.credit >300)

console.log(isTrue) // true

*/