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

// Exercicio 01
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
// console.log(authorBornIn1947());

// return books.find  -> [preciso usar o return para mostrar o meu resultado]
// ((book) => book.author.birthYear === 1947) -> [Ele vai executar a minha condição e me retornar]
// .author.name  -> [É o que eu quero mostrar no caso o "autor"]
// Linha 68 - authorBornIn1947() - preciso chamar a função

// Exercicio 02
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}
// console.log(smallerName());

// Importante para entender o mecanismo do Elemento o porque é necessario dele
// return books.forEach((elemento) => console.log(elemento.name)); // no caso o elemento é pra eu conseguir acessar o objeto

// Exercicio 03
function getNamedBook() {
  return books.find((book) => book.name.length === 26).name;
}
// console.log(getNamedBook());

// Exercicio 04
function booksOrderedByReleaseYearDesc() {
  return books.sort((livroA, livroB) => livroB.releaseYear - livroA.releaseYear);
}
// console.log(booksOrderedByReleaseYearDesc())


// Exercicio 05 - const expectedResult = false;
function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000)
}
// console.log(everyoneWasBornOnSecXX());

// Exercicio 06 - const expectedResult = true;
function someBookWasReleaseOnThe80s() {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
}
console.log(someBookWasReleaseOnThe80s());