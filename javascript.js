

/*

getElementById -> tras um elemento do HTML pelo seu ID, no caso o input com id 'main-input'

Ex :    const input = document.getElementById('main-input')
        console.log(input)


getElementsByTagName -> tras todos os elementos de cada tag 

Ex:  const elements = document.getElementsByTagName('main-input')
     console.log(elements)



getElementsByName -> tras todos os elementos com o mesmo name

Ex:  const elements = document.getElementsByName('main-input')
     console.log(elements)



 querySelector -> tras o primeiro elemento, o primeiro que encontrar

 Ex :   const elements = document.querySelector('main-input')
        console.log(elements)



querySelectorAll -> tras todos os elementos que encontrar

Ex:  const elements = document.querySelectorAll('main-input')
     console.log(elements)

*/

const input = document.getElementById('main-input')

console.log(input)


/*
   pode retirar e colocar  o conteudo do elemento de 3 formas diferentes

console.log(element.textContent) -> so html, sem as tags, so o conteudo do elemento
console.log(element.innerText) -> Leva em consideração o CSS
console.log(element.innerHTML) -> traz o html, com as tags, com o conteudo do elemento

*/



/*
   No Java Script, podemos alterar o estilo de um elemento HTML diretamente através
   da propriedade style. Por exemplo, podemos mudar a cor de fundo de um botão selecionado 
   com querySelector:

    colocando houver... quando passa o curso do mouse em cima do botão, ele muda a cor de fundo, e quando tira o mouse de cima do botão, ele volta a cor de fundo original.
    Exemplo a baixo ...

*/
const button = document.querySelector('.main-button')

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'rgb(0, 0, 255)'
}
);

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'rgb(144, 0, 255)'
});

/*
 mudando a cor do titulo do h1  
exmeplo a baixo ...
*/
const title = document.querySelector('h1')
title.style.color = 'rgb(144, 0, 255)'
title.style.fontSize = '30px'



/*
Eventos do input para aparecer no html o que foi digitado no input, e quando clicar no botão, ele limpa o input e o h1
*/
function cliqueiNoBotao() {
    const input = document.getElementById('main-input')
    const textarea = document.getElementById('main-textarea')
    textarea.value = input.value
    input.value = ''
}

