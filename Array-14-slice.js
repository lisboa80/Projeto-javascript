
// slice - O método slice() retorna um novo array, apenas com as informações escolhidas

/* 1) Posição do array da qual vamos começar a pegar as informações 
		  para criar o novo array
	 2) Posição final do array que vamos pegar os dados
*/

const users = ["João", "Maria", "Pedro", "Michele", "Fernando"];

console.log(users.slice(2));
// ["Pedro", "Michele", "Fernando"];

console.log(users.slice(2, 4));
// [ "Pedro", "Michele" ];

console.log(users.slice(1, 6));
// ["Maria", "Pedro", "Michele", "Fernando"];


console.log(users.slice());
// ["João", "Maria", "Pedro", "Michele", "Fernando"];