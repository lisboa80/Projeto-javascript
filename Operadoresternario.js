/* Operador Ternário -> É uma forma de simplificar uma estrutura condicional
                         if/else em uma única linha de código.

                         Obs: Se não precisar reduzir o código ou se ele ficar 
                             muito complexo, não use operador ternário para 
                             manter a legibilidade do código.

  ? -> if (se)
  : -> else (senão)
  && -> Short-circuit (if sem else)
*/

// ==========================================
// EXEMPLO 1: If / Else Simples
// ==========================================

const salary1 = 5000;

// Estrutura tradicional comentada para estudo:
// if (salary1 < 3000) {
//     console.log("O Colaborador é Júnior.");
// } else {
//     console.log("O Colaborador é Sênior.");
// }

// Forma simplificada com operador ternário:
const message1 = salary1 < 3000 ? "O Colaborador é Júnior." : "O Colaborador é Sênior.";
console.log(message1);


// ==========================================
// EXEMPLO 2: If sem else (Short-circuit com &&)
// ==========================================

const salary2 = 2000; // Alterado para 2000 para a condição ser verdadeira

// Estrutura tradicional comentada para estudo:
// if (salary2 < 3000) {
//     console.log("O Colaborador é Júnior.");
// } 

// Forma simplificada com operador lógico &&:
salary2 < 3000 && console.log("O Colaborador é Júnior.");


// ==========================================
// EXEMPLO 3: If / Else If / Else Aninhado
// ==========================================

const salary3 = 15000;

// Estrutura tradicional comentada para estudo:
// if (salary3 < 3000) {
//     console.log("O Colaborador é Júnior.");
// } else if (salary3 >= 3000 && salary3 < 10000) {
//     console.log("O Colaborador é Sênior.");
// } else {
//     console.log("O Colaborador é Diretor.");
// }

// Forma simplificada com operador ternário aninhado:
const message3 = salary3 < 3000
  ? "O Colaborador é Júnior."
  : salary3 >= 3000 && salary3 < 10000
    ? "O Colaborador é Sênior."
    : "O Colaborador é Diretor.";

console.log(message3);
