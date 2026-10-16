/*
Calculadora de descontato:


todos os Produtos acima de R$ 30,00 tem desconto de 10%

const cart = [10,244,99,2,20,33,250]
let finalValue = 0

  function calculateDiscount (price,discount) {
         const result=(price*discount) /100
  } 
// Percorre o carrinho aplicando a regra
cart.forEach((value) => {
  if (value > 30) {
    // Aplica 10% de desconto se for maior que R$ 30,00
    finalValue += calculateDiscount(value, 10);
  } else {
    // Mantém o valor original se for R$ 30,00 ou menos
    finalValue += value;
  }
});




const cart = [10,244,99,2,20,33,250]
let finalValue = 0

  function calculateDiscount (price,discount) {
         const result=(price*discount) /100
         return result
  } 

cart.forEach((value) => {

  if (value > 30) {
    const discount = calculateDiscount(value, 10)
    finalValue = finalValue + (value - discount)
  } else {
    finalValue += value
  }
})
console.log (finalValue)

*/


const cart = [10, 244, 99, 2, 20, 33, 250];

let finalValue = 0; // Total sem desconto
let finalValuewithDiscount = 0; // Total com desconto
let totalDiscount = 0; // Acumulador do desconto total

function calculateDiscount(price, discount) {
  const result = (price * discount) / 100;
  return result;
}

cart.forEach((value) => {
  finalValue += value; // Soma o valor original de cada item

  if (value > 30) {
    const discount = calculateDiscount(value, 10);
    totalDiscount += discount; // Acumula o valor economizado
    finalValuewithDiscount += value - discount;
  } else {
    finalValuewithDiscount += value;
  }
});

console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)},
porem voce teve desconto, ira pagar apenas R$ ${finalValuewithDiscount.toFixed(2)},
voce economizou R$ ${totalDiscount.toFixed(2)}.`);