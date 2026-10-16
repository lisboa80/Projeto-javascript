/*
Functions/ funcoes
funcoes podem receber argumentos ou parametros.


function saymyname(name){

  console.log(`name e : ${name}`)

}

saymyname("Cristiano")
saymyname("Claudinei")
saymyname("Neri")
saymyname("Roberto")

Resultado  =   name e : Cristiano
               name e : Claudinei
               name e : Neri
               name e : Roberto




//-----------------------------------------------------
// mini cauculadora com soma de 2 valores
function sum(value, value2){

console.log(value + value2)

}

    sum(20,30)
    sum(26,40)
    sum(11,21)

Resultado  =    50
                66
                32

*/



// Valor Padrao = se nenhum soma for chamada entao ele chama valor padrao 0 + 0 resultado e 0
/*
function sum(number = 0 ,number2 = 0){

    console.log(number + number2)
}

sum()

Resultado = 0


//ou pode ter uma variavel


 const myNumber = 20

  function sum(number=myNumber,number2=1){
      
     console.log(number + number2)
  }
  
  sum(10)


  Resultado = 11 


  */