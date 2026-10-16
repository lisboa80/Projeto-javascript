
//  Faz o mesmo que o .find(), mas retorna o índice
//  do elemento encontrado ao invés de retornar o próprio elemento.


const users = [
	{ name: 'João', credit: 600 },
	{ name: 'Maria', credit: 900 },
	{ name: 'Carlos', credit: 300 },
	{ name: 'Vanessa', credit: 300 },
];

const findUser = users.findIndex((user) => user.name === 'Maria');
// 1

console.log(findUser); // 1