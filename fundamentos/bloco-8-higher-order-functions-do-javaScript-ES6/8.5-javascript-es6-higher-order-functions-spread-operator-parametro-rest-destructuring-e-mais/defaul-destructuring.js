// // Exemplo 01
// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
//   const { nationality = 'Brazilian' } = person;
//   console.log(nationality); // Brazilian




// Exemplo 02
  const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


// Exercicio 01

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is Brazilian