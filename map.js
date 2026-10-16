/*
map -> mapear o nosso array 

 - criar um novo array com os elementos modificados, sem alterar o array original
 -criar um novo array, com a mesma quantidade de elementos do array original,
           mas com os elementos modificados

 - Aceita 3 parâmetros:
 1º -> item do array = coletar item por item do array original
 2º -> index = posição do array que ele está
 3º -> array completo = array completo que está sendo mapeado

*/


/*
const number = [1, 2, 3, 4, 5 , 6 , 7]
const double = number.map((item, index, arrayOriginal) => {
    const newItem = item * 2
    return newItem
})
console.log(double)
console.log(number) // array original não é alterado
*/

//Forma mais simplificada//

const number = [1, 2, 3, 4, 5, 6, 7]
const double = number.map(item => item * 2)
console.log(double)
console.log(number) // array original não é alterado
