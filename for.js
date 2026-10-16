/*
for

1- INICIALIZAÇÃO - Criar uma variável e colocar
                   um valor inicial para ela.

2- CONDIÇÃO - Quando for true, o laço continuará iterando.
              Ele irá verificar antes de cada interação.

3- EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso
                     laço der uma volta.


O for percorre a lista users do primeiro ao último nome,
 usando i para controlar a posição de cada elemento.

*/

const users = [
    'Maria', 'Aline', 'Joao', 'Carolina',
    'Maria', 'Aline', 'Joao', 'Carolina',
    'Maria', 'Aline', 'Joao', 'Carolina'
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
} 