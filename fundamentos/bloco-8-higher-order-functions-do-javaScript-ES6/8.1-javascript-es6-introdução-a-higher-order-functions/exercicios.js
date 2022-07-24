// 1 - Exercicio 01

const employeeGenerator = (fullname) => {
  const email = `${fullname.replace(/ /g, "_").toLowerCase()}@trybe.com`;
  // const email = `${fullname.replace(' ', '_').toLowerCase()}@trybe.com`;
  return { nomeCompleto: fullname, email: email };
};

const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeGenerator("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeGenerator("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
// console.log(newEmployees(employeeGenerator));

// Exercicio 02

const geraNumeroAleatorio = () => Math.floor(Math.random() * 5 + 1);

const verificaResult = (numEscolhido, geraNumeroAleatorio) => {
  if (numEscolhido === geraNumeroAleatorio()) {
    return "Parabéns você ganhou";
  }
  return "Tente novamente";
};

// console.log(verificaResult(1, geraNumeroAleatorio));

const points = [40, 100, 1, 5, 25, 10];

let x = points.sort(function(a, b){
  // console.log(a, 'posicao A')
  // console.log(b, 'posicao B')
  return a - b
});

console.log(points);
console.log(x);
