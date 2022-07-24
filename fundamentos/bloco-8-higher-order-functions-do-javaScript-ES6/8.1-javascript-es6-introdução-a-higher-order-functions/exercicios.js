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






// Exercicio 03

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const verifica = (gabarito, resposta) => {
  if (gabarito === resposta) return 1;
  if (resposta === 'N.A') return 0;
  return -0.5;
}
const verifica2 = (gabarito, resposta) => {
  if (gabarito === resposta) return 1;
  return 0;
}
const retornaPontuacao = (arr1, arr2, callbackVerifica) => {
  let pontuacao = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    pontuacao += callbackVerifica(arr1[i], arr2[i]);
  }
  return `A sua pontuacao foi: ${pontuacao}`;
}
console.log(retornaPontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, verifica));
console.log(retornaPontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, verifica2));