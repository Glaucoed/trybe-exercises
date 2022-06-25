
// const n = 9;

// let resultado = 100;
// for (let index = 0; index <= n; index++) {
//     resultado -= index;    
// }
// console.log(resultado);


//- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 10;
// let resultado = fatorial;

// for (let index = 1; index < fatorial; index+= 1) {
//     resultado *= index;
// }
// console.log(resultado);


// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];

//     for (let index = 0; index < array.length; index+= 1) {

//         if (array[index].length > maiorPalavra.length){
        
//             maiorPalavra = array[index];
//         }        
//     }
//     console.log(maiorPalavra)


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menorPalavra = array[0];

//     for (let index = 0; index < array.length; index+= 1) {

//         if (array[index].length < menorPalavra.length){
        
//             menorPalavra = array[index];
//         }        
//     }
//     console.log(menorPalavra)


    //Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, 
    //ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne 
    //o maior número primo entre 2 e 50


let maiorNumero = 0;

for (let index = 2; index <= 20; index += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < index; currentDivisor += 1) {
    if (index % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maiorNumero = index;
  }
}

console.log(maiorNumero);




