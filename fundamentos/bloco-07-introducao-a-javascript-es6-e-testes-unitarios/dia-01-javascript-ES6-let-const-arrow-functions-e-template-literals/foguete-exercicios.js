// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }
//   testingScope(true);

// ===================================================================

// 2-🚀 Crie uma função que retorne um array em ordem crescente.

// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>);
// retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const sortOddsAndEvens = () => {
//     oddsAndEvens[0] = 2;
//     oddsAndEvens[1] = 3;
//     oddsAndEvens[2] = 4;
//     oddsAndEvens[3] = 7;
//     oddsAndEvens[4] = 10;
//     oddsAndEvens[5] = 13;

//     return oddsAndEvens;
//   };

//   console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);

// ===================================================================
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const smallestToLargest = oddsAndEvens.sort((a, b) => a - b);
// console.log(`Os números ${smallestToLargest} se encontram ordenados de forma crescente!`);

// ===================================================================
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);
// ===================================================================

// 1-  forma de realizar
const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);
console.log(factorial(5));

// 2 -  forma de realizar
// const multiplication = (number) => {
//   let resultado = number;
//   for (let index = 1; index < number; index += 1) {
//     resultado *= index;
//   }
//   return console.log(resultado);
// };
// multiplication(5);

// 3 -  forma de realizar
// const factorial = (number) => {
//   let result = 1;
//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }
//   return result;
// };

// const verificaPalavras = (frase) => {
//   const palavras = frase.split(" ");
//   let maior = frase[0];
//   for (let i = 0; i < palavras.length; i += 1) {
//     if (palavras[i].length > maior.length) {
//       maior = palavras[i];
//     }
//   }
//   console.log(maior);
// };
// verificaPalavras("abacaxi pindamonhangaba é uma cidade");


// Exercicio 3 - foguete.html


// Exercicio 4

//Gabarito

// const substituaX = (nome) => {
//    const frase = 'Tryber x aqui!';
//    const fraseArray = frase.split(' ');
//    for (let index = 0; index < fraseArray.length; index += 1) {
//      if (fraseArray[index] === 'x') {
//        fraseArray[index] = nome;
//      }
//    }  
//    return fraseArray.join(' ');
//  };
 
//  console.log(substituaX('Bebeto'));

// 4 - :foguete: Crie duas funções JavaScript com as seguintes especificações:
//Função 1
const substituiX = (nome) => {
   const frase = 'Tryber x aqui!';
   const novaFrase = frase.replace('x', nome)
   return novaFrase;
 }
 const retornoFuncao1 = substituiX('Glauco');
 //função 2
 const novastring =  (retornoFuncao1) => {
   const skills = ['Js', 'CSS', 'HTML'];
   let resultado = `${retornoFuncao1}
   Minhas três principais habilidades são:`;
   skills.forEach((skill) => {
     resultado = `${resultado}
     - ${skill}`;
   });
   return resultado;
 };
 console.log(novastring(retornoFuncao1));