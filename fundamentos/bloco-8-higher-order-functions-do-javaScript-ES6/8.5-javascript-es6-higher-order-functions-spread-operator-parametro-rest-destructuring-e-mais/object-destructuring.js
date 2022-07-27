// const product = {
//   name: "Smart TV Crystal UHD",
//   price: "1899.05",
//   seller: "Casas de Minas",
// };

// const { name, seller, price } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas
// console.log(price); // 1899.05





// Exemplo 02
// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível 
// que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// Exemplo 03
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']