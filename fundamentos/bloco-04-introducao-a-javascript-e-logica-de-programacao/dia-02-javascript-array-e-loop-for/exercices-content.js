// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// // 3


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.unshift('Fazer exercícios da Trybe');  // adiciona a tarefa na primeira posição
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // remove a última tarefa
// console.log(tasksList);

// // [ 'Tomar café', 'Reunião' ]

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião'); // Usado para procurar o índice de um item no Array
// console.log(indexOfTask);



// //Exercicio 01 - Obtenha o valor "Serviços" do array menu:
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = (menu[1]);

// console.log(menuServices);

// //Exercicio 02 - Procure o índice do valor "Portfólio" do array menu:
// let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portifólio');

// console.log(indexOfPortfolio);

// //Exercicio 03 - Adicione o valor "Contato" no final do array menu:
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato')

// console.log(menu);


// // FOR - Exemplo conteudo

// var num = 7;

// for(var contador =1; contador <= 9; contador += 1){
//     console.log(num * contador);
// };

// var listaDeNomes = ['Joana','Maria','Lucas']

// for(var indice = 0; indice < listaDeNomes.length; indice += 1){
//     console.log("Boas Vindas " + listaDeNomes[indice]);
// };

// let cars = ["Saab", "Volvo", "BMW"];

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }


// // Exercicio conteudo


// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for(let index = 0; index < groceryList.length; index += 1){
//     console.log(groceryList[index]);
// }


// // For/ OF 



// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// // resultado:
// //1
// //2
// //3
// //4
// //5

// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"


// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// // 11
// // 21
// // 31


// console.log(arrOfNumbers);
// // Resultado: [10, 20, 30]


// //Exercicio for/of

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for(let imp of names){
// console.log(imp)
// }