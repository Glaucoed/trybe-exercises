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

let pecas = "Peao"

switch (pecas.toLowerCase()) {
    case "peao":
        console.log("Peão -> Frente o primeiro movimento podem ser duas casas.");
        break;
    case "cavalo":
        console.log("Cavalo -> 'L' pode pular sobre as peças");
        break;
    case "torre":
        console.log("Torre -> Vertical ou horizontal");
        break;
    case "bispo":
        console.log("Bispo-> Diagonal");
        break;
    case "rainha":
        console.log("Rainha-> Horizontal, vertical e diagonais");
        break;
    case "rei":
        console.log(" Rei-> Horizontal, vertical e diagonal");
        break;
    default:
        console.log("Peça invalida, tente outra.");  

};