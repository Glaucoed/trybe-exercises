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