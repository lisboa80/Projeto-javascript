/*
Estrutura de repeticao  - Loop

-  For-in

consegui pegar a chave dos objetos


*/

const users = { name: 'rodolfo', age: 33, street: "Rua dos bobos" }

for (const key in users) {
    console.log(key)

}

// ele pega so os objetos
// resultado =  name age street


//----------------------------------------------------------


// temos 2 jeitos de acessar propriedade do objeto / resultado e o mesmo... rodolfo rodolfo
// users.name
// users['name']

//se eu quiser pegar a objetos e valores ...
// usando users['name'] te da mais poderes.

// Exemplos 1... dando resultado de "namerodolfo age33 streetRua dos Bobos"

for (const key in users) {
    console.log(key + users[key])

}

// Exemplo 2...  dando resultado de "name : rodolfo age : 33 street : Rua dos Bobos"

for (const key in users) {
    console.log(`${key} : ${users[key]}`)

}

// dessa forma fica mais profissional















