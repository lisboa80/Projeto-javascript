/*
filter 
- Cria um novo array, a partir do array percorrido (array original)
-Cria um novo array APENAS com os elementos filtrados, ou seja, que atendem a uma condição.
- Aceita 3 parâmetros:

1º -> item do array = coletar item por item do array original
2º -> index = posição do array que ele está
3º -> array completo = array completo que está sendo filtrado

*/
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => number > 100)

console.log(newList) // [234, 541, 275, 1000]


/*
exemplo 2: ele vai filtrar os numeros maiores que 100 e pares,
             retornando um novo array com esses numeros

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number =>
    if (number > 100 && number % 2 === 0) {
        return true
    }else {
        return false
    }


*/

// exemplo 3: comprar compania que custe menos de 200 e funda acima de 1990 

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Pat Gelsinger', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

const newCompanies = companies.filter(company => {
    if (company.marketValue < 200 && company.foundedOn > 1990)
        return true
    else
        return false

})
console.log(newCompanies) // [ { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 } ]
