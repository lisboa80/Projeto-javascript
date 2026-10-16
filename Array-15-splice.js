
//splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.

/* 1) Posição do array da qual vamos começar a tirar as informações 
	 2) Quantos elementos eu quero retirar a partir da posição inicial 
	 3) Item que você quer adicionar
*/

const users = ['joao', 'Maria', 'Pedro', 'Michele', 'Fernado'];

users.splice(0, 3, 'Patricia');

//['Patricia', 'Michele', 'Fernado']

