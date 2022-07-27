const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exericio 02

//   const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
function reduceNames() {
  return books
    .map((book) => book.author.name)
    .reduce(
      (inicial, proximo, index, array) =>
        index === array.length - 1
          ? `${inicial} ${proximo}. `
          : `${inicial} ${proximo}, `,
      ""
    );
}
// console.log(reduceNames());

// Exericio 03
const expectedResult = 43;

function averageAge() {
  const tamanhoArray = books.length;

  const mediaIdade = books
    .map((book) => book.releaseYear - book.author.birthYear)
    .reduce((parcial, proximo) => parcial + proximo);
  return mediaIdade / tamanhoArray;
}
// console.log(averageAge());

// Exericio 04

/*
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};
*/

function longestNamedBook() {
  const maiorNome = books.reduce((total, proximoValor) =>
    total.name.length > proximoValor.name.length ? total : proximoValor
  );
  return maiorNome;
}
// console.log(longestNamedBook());

// Exericio 05
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

//Logica fazendo o exercicio

function containsA() {
  return names
    .map((name) => name)
    .toString()
    .split("")
    .reduce(
      (acc, name) =>
        name.includes("A") || name.includes("a") ? (acc += 1) : acc,
      0
    );
}

//Gabarito

function containsA() {
  return names.reduce(
    (acc, curr) =>
      acc +
      curr.split("").reduce((acumulator, current) => {
        if (current === "a" || current === "A") return acumulator + 1;
        return acumulator;
      }, 0),
    0
  );
}

// console.log(containsA());

// Exercicio 06

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  const mediaEstudantes = students.map((estudante, index) => ({
    name: estudante,
    average:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }));
  return mediaEstudantes;
}
console.log(studentAverage());

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
