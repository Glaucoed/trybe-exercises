// // // // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

// // let info = {
// //     personagem: 'Margarida',
// //     origem: 'Pato Donald',
// //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //   };
// // console.log('Bem vinda, ' + info.personagem);


// // // 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// // let info = {
// //     personagem: 'Margarida',
// //     origem: 'Pato Donald',
// //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// // };

// // info['recorrente'] = 'Sim'

// // console.log(info);

// // // 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// // let info = {
// //     personagem: 'Margarida',
// //     origem: 'Pato Donald',
// //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //     recorrente: 'Sim'
// // };

// // for (let key in info) {
 
// //     console.log(key)
// // };

// // // // 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// // for (let key in info) {
 
// //     console.log(info[key])
// // };


// // // //5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// // // //'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, 
// // // //imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// // let info = {
// //     personagem: 'Margarida',
// //     origem: 'Pato Donald',
// //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //     recorrente: 'Sim'
// // };

// // let info2 = {
// //     personagem: "Christmas on Bear Mountain, Dell's Four Color Comics #178", 
// //     origem: 'O último MacPatinhas',
// //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //     recorrente: 'Sim'
// // };

// // console.log(info.personagem + ' e ' + info2.personagem)
// // console.log(info.origem + ' e ' + info2.origem)
// // console.log(info.nota + ' e ' + info2.nota)

// // if(JSON.stringify(info.recorrente) === JSON.stringify(info2.recorrente)){
// //     console.log("Ambos recorrentes")
// // }else{
// //     console.log("Ambos não são recorrentes")
// // };


// // // //////////////// outra solução /////////////////////


// // for (let properties in info) {
// //     if (properties === 'recorrente' && info[properties] === 'Sim' && info2[properties] === 'Sim') {
// //       console.log('Ambos recorrentes');
// //     } else {
// //       console.log(info[properties] + ' e ' + info2[properties]);
// //     }
// //   }


// //   // 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: 
// //   // "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// //   let leitor = {
// //     nome: 'Julia',
// //     sobrenome: 'Pessoa',
// //     idade: 21,
// //     livrosFavoritos: [
// //       {
// //         titulo: 'O Pior Dia de Todos',
// //         autor: 'Daniela Kopsch',
// //         editora: 'Tordesilhas',
// //       },
      
// //     ],
    
// //   };
// // console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
// // console.log(leitor.teste[0].autor);

// // // 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. 
// // //Atribua a esta chave um objeto contendo as seguintes informações:

// // leitor.livrosFavoritos[1] = { titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Roco' }


// // // 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// // console.log( leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


// // //1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// // function verificaPalindrome(str) {
// //   let reverse = str.split('').reverse().join('');
// //   if (str === reverse) {
// //     return true;       
// //   }
// //   return false;
// // }

// // console.log(verificaPalindrome('arara'));
// // console.log(verificaPalindrome('desenvolvimento'));

// //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// // Array de teste: [2, 3, 6, 7, 10, 1];.
// //Valor esperado no retorno da função: 4.

// // function verificaInt (number){
// //   maior = 0;
// //   for (let indice in number) { 
// //       if(number[maior] < number[indice]){
// //       maior = indice
// //     }
// //   }
// //   return maior;
// // }
// // console.log(verificaInt([2, 3, 6, 7, 10, 1]));


// 3- - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


function verificaInt (arrayNumber){
  let menor = arrayNumber[0];
    for (let index = 0; index < arrayNumber.length; index +=1) {
      if (menor > arrayNumber[index]) {
            menor = arrayNumber[index];
      }
    }  
  return menor;
  
}
console.log(verificaInt([2, 4, 6, 7, -100, 0, -3]));





// function somaNumeros(num) {

//   let total = 0; 
   
//    for (let index = num; index > 0; index -= 1) {
//       total = total + num;
//       num -= 1;       
//    }
//   return total;
// }
// console.log(somaNumeros(15));


// /*
// Dado um array de inteiros.

// Retorna um array, onde o primeiro elemento é a contagem de números positivos e o segundo elemento é a soma de números negativos. 
// 0 não é positivo nem negativo.

// Se a entrada for uma matriz vazia ou for nula, retorne uma matriz vazia.

// Exemplo
// Para entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], você deve retornar [10, -65].
// */

// function contagem(num) {

//   let contagemPositivos = 0;
//   let somaNegativos = 0;

//   if (num === ) {
    
//   }
  
// for (let value of num) {
//   console.log(value)
//     if (value > 0) {
//       contagemPositivos += 1 
//     }   
//     if(value < 0){
//       somaNegativos += value
      
//     }
//     if (num === null || num === 0) {
//       return null     
          
//     }
// }
// return contagemPositivos 
// return somaNegativos

// }
// console.log(contagem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));





// var array = [-72, -3, -17, -10];
// var lg = array[0];
// for (var i = 1; i < array.length; i++) {
//     if (array[i] > lg) {
//         lg = array[i];
//     } 
// }
// console.log('largest No :' + lg);


// function catAndMouse(cat1, cat2, mouse){
 
//   if (Math.abs(mouse - cat1) < (Math.abs (mouse - cat2))) {
//       return 'cat1';
//   }else if((Math.abs(mouse - cat1) === Math.abs(mouse - cat2))){
//       return 'os gatos trombam e o rato foge';
//   }else {
//   return 'cat2';
//   }
// }
//   console.log(catAndMouse(1, 0, 2));

// function catAndMouse(cat1, cat2, mouse) {
// //   if ((Math.abs(mouse - cat1) < (Math.abs(mouse - cat2)))) {
// //     return 'cat1';
// //   } if (Math.abs(mouse - cat1) === (Math.abs(mouse - cat2))) {
// //     return 'os gatos trombam e o rato foge';
// //   }
// //   return 'cat2';
// // }
// function catAndMouse(cat1, cat2, mouse) {
// let catA = Math.abs(mouse - cat1);
// let catB = Math.abs(mouse - cat2)

// if(catA > catB){
// return 'cat1'
// }else if(catB > catA){
//   return 'cat2'
// }
// else{
//   return 'os gatos trombam e o rato foge'
// }
// }



// function catAndMouse(x, y, z) {
//   let aDiff = Math.abs(z - x)
//   let bDiff = Math.abs(z - y)
//   if ( aDiff == bDiff ){
//   return "Mouse C"
//   } else if ( aDiff < bDiff ){
//   return "Cat A"
//   } else {
//   return "Cat B"
//   }
//   }

// console.log(catAndMouse(0, 3, 2));

// //"${workspaceFolder}/fundamentos/bloco-04-introducao-a-javascript-e-logica-de-programacao/dia-04-javascript-objetos-e-funcoes/exercicies.js",

// function fizzBuzz(arrayNumbers) {
//   let armazena = [0];
//   for (let index = 1; index < arrayNumbers.length; index += 1) {
//     if (index % 3 === 0) {
//       armazena.push("fizz")
//     }else if (index % 5 === 0){
//       armazena.push("fizz")
//     }else if (index % 3 === 0 && index % 5 === 0){
//       armazena.push("FizzBuzz")
//     }else{
//       armazena.push('bug!')
//     }
    
//   return armazena;
// }}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));


// function fizzBuzz(array){
//   var armazenaName = [];

//   for (var contador=0; contador <= array.length-1; i+=1)
//   {
//       if (array[contador] % 3 == 0 && array[i] % 5 == 0)
//       armazenaName.push("fizzBuzz");
//       else if (array[contador] % 5 == 0)
//       armazenaName.push("buzz");
//       else if (array[contador] % 3 == 0 )
//       armazenaName.push("fizz");
//       else
//       armazenaName.push('bug!')
//   }
//   return armazenaName;
//   }

// //   console.log(fizzBuzz([9, 25]));
//   function fizzBuzz(array) {
//     let armazenaName = [];  
//     for (let contador=0; contador <= array.length-1; contador+=1){
//       if (array[contador] % 3 == 0 && array[contador] % 5 == 0){
//        armazenaName.push('fizzBuzz');
//       }else if (array[contador] % 5 == 0){
//        armazenaName.push('buzz');

//       } else if (array[contador] % 3 == 0 ){
//        armazenaName.push('fizz');
//       } else {
//        armazenaName.push('bug!');
//       }
      
//   } 
//   return armazenaName;
// }
//   console.log(fizzBuzz([9, 25]));

function catAndMouse(mouse, cat1, cat2) {
let valorGato1 = Math.abs(cat1 - mouse)
let valorGato2 = cat2 - mouse
console.log(valorGato1)
console.log(valorGato2)

}

function catAndMouse(mouse, cat1, cat2) {
  let valorGato1 = Math.abs(cat1 - mouse)
  let valorGato2 = cat2 - mouse
  if(valorGato1 === valorGato2){
    console.log('os gatos trombam e o rato foge')
  }else if(valorGato1 > valorGato2)
    console.log('cat2')
  }else{
    console.log('cat1')
  }
console.log(catAndMouse(1, 2, 3)); //  0 = gato1 | 1 = rato | 2 = gato2


function catAndMouse(z, x, y,) {
  let aDiff = Math.abs(z - x)
  let bDiff = Math.abs(z - y)
  if ( aDiff == bDiff ){
  return "Mouse C"
  } else if ( aDiff < bDiff ){
  return "Cat A"
  } else {
  return "Cat B"
  }
  }

  console.log(catAndMouse(1, 0, 2)); //  0 = gato1 | 1 = rato | 2 = gato2



  function catAndMouse(mouse, cat1, cat2) {
    let valorGato1 = Math.abs(cat1 - mouse);
    let valorGato2 = Math.abs(cat2 - mouse);
    if (valorGato1 === valorGato2) {
      return 'os gatos trombam e o rato foge';
    } if (valorGato1 < valorGato2) {
      return 'cat1';
    }else{
    return 'cat2';
    }
  }
  console.log(catAndMouse(1, 3, 2)); //  0 = gato1 | 1 = rato | 2 = gato2