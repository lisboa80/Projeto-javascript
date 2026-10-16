
// .fill = preenche todos os elementos do array com um valor estático.

const numbers = [1, 2, 3, 4, 5]
numbers.fill(3)

console.log(numbers) // [ 3, 3, 3, 3, 3 ]

//agora pode fazer de forma ordenada em 3 posicoes 
// posicao 1 =  valor ou scrita que aparece no array
// posicao 2 =  de onde termina se 0,1,2,3,4
// posicao 3 =  ate onde termina se 0,1,2,3,4 




// Exemplo:
//const numbers = [1, 2, 3, 4, 5]

numbers.fill('abacate', 0, 2)

console.log(numbers) // [ 'abacate', 'abacate', 3, 4, 5 ]

// ele inicia do 0 e termina no 2, ou seja, ele preencheu as posicoes 0 e 1 com abacate