/* 
    Redulce = vai pegar array original e vai reduzir os itens a um único valor,
              retornando esse valor.

    - Aceita 4 parâmetros:
     - cacumulador = valor que vai ser acumulado a cada iteração
     - valor atual = coletar item por item do array original
     - index = posição do array que ele está
     - array completo = array completo que está sendo filtrado

*/


/*
Exemplo : 

const list = [1, 2, 3, 4, 5 , 6 , 7]
const sum = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) // 0 é o valor inicial do acumulador

console.log(sum) // 28  */


/*
Exemplo 2:
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
     name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
     name: 'Intel', marketValue: 117, CEO: 'Pat Gelsinger', foundedOn: 1968 },
     name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
     name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
     name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]
     const totalMarketValue = companies.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.marketValue;
    }, 0) // 0 é o valor inicial do acumulador

    console.log(totalMarketValue) // 1840
*/



const cart = [
    { productName: 'Abobora', pricePerkg: 5.00, kg: 1 },
    { productName: 'Pepino', pricePerkg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerkg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerkg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerkg: 11.9, kg: 3 }
]
const finalValue = cart.reduce((acc, Value) => {
    const result = Value.pricePerkg * Value.kg
    return acc + result;
}, 0) // 0 é o valor inicial do acumulador

console.log(`A sua Compra deu um total de R$ ${finalValue}`)