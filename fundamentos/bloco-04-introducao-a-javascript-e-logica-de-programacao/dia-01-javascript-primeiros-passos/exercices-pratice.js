// Exercicio 01

// const a = 15;
// const b = 20;
// let result = 0;

// console.log(let = a + b);
// console.log(let = a - b);
// console.log(let = a * b);
// console.log(let = a / b);
// console.log(let = a % b);

// Exercicio 02

// const a = 15;
// const b = 20;
// let maior = 0;

// if(a > b){
//     console.log("A é o maior")
// }
// else{
//     console.log("B é o maior")
// }

// Exercicio 03

// const a = 25;
// const b = 20;
// const c = 5;

// if (a > b && a > c){
//     console.log("O numero maior é A");
// }
// else if(b > a && b > c){
//     console.log("O numero maior é B");
// }
//     else{
//     console.log("O numero maior é C");
// };



// Exercicio 04

// const value = 0;

// if(value > 0){
// console.log("positive");
// }
// else if(value < 0){
// console.log("negative");
// }else{
//     console.log("zero");
// };

// Exercicio 05

// const ladoUm = 50;
// const ladoDois = 70;
// const ladoTres = 60;

// let triangulo = ladoUm + ladoDois + ladoTres;

// let todosLados = ladoUm > 0 && ladoDois > 0 && ladoTres > 0;

// if(todosLados){
// if (triangulo === 180) {
//     console.log("true")
// } else{
//     console.log("false")
// };
// }else{
//     console.log("Algo está errado!")
// }

// Exercicio 06

// let pecas = "Peao"

// switch (pecas.toLowerCase()) {
//     case "peao":
//         console.log("Peão -> Frente o primeiro movimento podem ser duas casas.");
//         break;
//     case "cavalo":
//         console.log("Cavalo -> 'L' pode pular sobre as peças");
//         break;
//     case "torre":
//         console.log("Torre -> Vertical ou horizontal");
//         break;
//     case "bispo":
//         console.log("Bispo-> Diagonal");
//         break;
//     case "rainha":
//         console.log("Rainha-> Horizontal, vertical e diagonais");
//         break;
//     case "rei":
//         console.log(" Rei-> Horizontal, vertical e diagonal");
//         break;
//     default:
//         console.log("Peça invalida, tente outra.");  

// };

// Exercicio 07

// let porcentagem = 1;

// if(porcentagem <0 || porcentagem > 100){
//     console.log("Erro, nota incorreta!");
// }
// else if (porcentagem >= 90) {
//     console.log("A");   
// } else if(porcentagem >= 80) {
//     console.log("B");
// } else if(porcentagem >= 70) {
//     console.log("C");
// } else if(porcentagem >= 60) {
//     console.log("D");
// } else if(porcentagem >= 50) {
//     console.log("E");
// } else {
//     console.log("F"); 
// };

// Exercicio 08
//  quando usamos o || quer dizer (ou) - precisa que somente 1 seja (true) no caso par


const a = "3";
const b = "3";
const c = "4";

result = false;

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ) {
    result = true;
};
console.log(result)
