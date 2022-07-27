// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

var objeto = {
    area: 0,
    perimetro: 0
  }

  //Exercício 2 - Crie uma função que, dado um array de números inteiros, 
  //retorne a quantidade de números pares e ímpares no formato:
  
  var numeros = {
    pares: 0,
    ímpares: 0
  }

function calculaNumeros (arrayNum){
    for(let index = 0; index <= arrayNum.length; index += 1){    
    if(arrayNum % 2 === 0){
 
}


  
  //Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
  //Considere que a string ending sempre será menor que a string word.
  //Dica: Use o split.
  
  
  // valor de teste: ‘trybe’ e ‘be’
  // valor esperado no retorno da função: true
  //verificaFimPalavra(‘trybe’, ‘be’);  
  // Retorno esperado: true  
  //verificaFimPalavra(‘joaofernando’, ‘fernan’);  
  //  Retorno esperado: false;  