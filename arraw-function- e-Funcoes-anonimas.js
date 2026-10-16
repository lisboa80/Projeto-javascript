/* Functions / Funcoes

   Function padrao -> function() {}
   arrow Function -> () => {}

    Nao Escrevemos "Function".
    Alem disso,uamos o sinal "=>" para cria-las,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Function".


*/

function sayMyName (name) {
      return `Seu nome e ${name}`
}


const sayMyName2 = name => `Seu nome e ${name}`



console.log (sayMyName('Rodolfo'))
console.log (sayMyName('Nico'))




/*

Exemplo com somas

function sayMyName (name) {
      return `Seu nome e ${name}`
}


const sum = (number1,number2) => number1 + number2



console.log (sayMyName('Rodolfo'))
console.log(sum(2,3))





// FUNCOES ANONIMAS - element

Array.array.forEach(element => {
      
});

//  Forma antiga - function()

Array.array.forEach(function() {
      
});


*/