/* 

---------------------------------------------------------------

EXEMPLO 1

==  -> igual // Compara o valor,mas nao o Tipo
=== -> Totalmente igual // Compara o valor e o Tipo

const firstNumber = 30
const secondNumber = 40

if(firstNumber == secondNumber) {
    console.log("Eles sao iguais")
}
else {
    console.log ("nao sao iguais")
}

resultado = false


EXEMPLO 2

const firstNumber = 30
const secondNumber = "30"

if(firstNumber === secondNumber) {
    console.log("Eles sao iguais")
}
else {
    console.log ("nao sao iguais")
}

resultado = nao sao iguais      /  falso por 30 ser diferente
                                  de "30" quando se usa ===

 
EXEMPLO 3

const firstNumber = 30
const secondNumber = 30

if(firstNumber === secondNumber) {
    console.log("Eles sao iguais")
}
else {
    console.log ("nao sao iguais")
}

resultado = Eles sao iguais       /  por eles ser totalmente iguais 30 e 30

-------------------------------------------------------------------

!=  -> Diferente // Compara o valor,mas nao o Tipo
!== -> Totalmente Diferente // Compara o valor e o Tipo

Exemplo 1

const firstNumber = 30
const secondNumber = 49

if(firstNumber != secondNumber) {
    console.log("Sim, sao Diferentes")
}
else {
    console.log ("nao, nao sao Diferentes")
}

resultado =Sim, sao Diferentes  

Exemplo 2

const firstNumber = 30
const secondNumber = 30

if(firstNumber != secondNumber) {
    console.log("Sim, sao Diferentes")
}
else {
    console.log ("nao, nao sao Diferentes")
}

resultado = nao, nao sao Diferentes



Exemplo 3

const firstNumber = 30
const secondNumber = "30"

if(firstNumber !== secondNumber) {
    console.log("Sim, sao Diferentes")
}
else {
    console.log ("nao, nao sao Diferentes")
}

resultado = Sim, sao Diferentes


Exemplo 4

const firstNumber = 30
const secondNumber = "30"

if(firstNumber != secondNumber) {
    console.log("Sim, sao Diferentes")
}
else {
    console.log ("nao, nao sao Diferentes")
}

resultado = nao, nao sao Diferentes



---------------------------------------------------------------
>  ->  Maior
<  ->  Menor

>=  -> Maior ou igual
<=  -> Menor ou igual

Exemplo 1

const firstNumber = 30
const secondNumber = 50

console.log (firstNumber <= secondNumber)

resultado e true


Exemplo 2

const firstNumber = 30
const secondNumber = 30

console.log (firstNumber <= secondNumber)

resultado e true

*/

