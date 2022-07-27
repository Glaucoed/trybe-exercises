// exemplo 01 -

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


// Exercicio 01

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá // sem destruturação

const [texto, consolelog] = saudacoes
consolelog(texto) // com destruturação

// Produza o mesmo resultado acima, porém utilizando array destructuring

// Exercicio 02
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo



// Exercicio 03

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo