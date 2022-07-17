/*
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


order.name = 'Jonathan'
order.payment.total = '30'

// order.order.drinks.coke.type = 'Guarana'

// const pizza1 = Object.entries(order.order.pizza);
// console.log(pizzaM[1][0]); // marguerita

const customerInfo = (order) => {

  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street} Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {

// Duas formas corretas 
// const pizza1 = Object.entries(order.order.pizza);
// console.log(pizzaM[1][0]); // marguerita

const pizza = Object.keys(order.order.pizza);

// console.log(pizza); exibe desta forma  'marguerita,pepperoni'

const bebida = Object.values(order.order.drinks.coke);
const valor = Object.values(order.payment);

console.log(`Olá ${order.name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida[0]} é R$ ${valor},00.`)
}

orderModifier(order);

*/

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
  // x: {
  //   z: '1',
  //   y: '2',
  //   h: '3',
  // }
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros,
//sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const alteraTurno = (objeto, chave, valor) => (objeto[chave] = valor);

// objeto.chave = valor  // reatribui o valor da chave e valor
// objeto.newKey = 1;
// lesson2['alterandokey'] = lesson2['newKey']; // Não faz parte do exercicio só para curiosidade de como alterar o nome da chave
// delete lesson2 ['newKey'];
alteraTurno(lesson2, "turno", "noite");
// console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaKeys = (objeto) => Object.keys(objeto);
// console.log(listaKeys(lesson1));

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObjeto(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valoresObjeto = (objeto) => Object.values(objeto);
// console.log(valoresObjeto(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula,
//sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = () =>
  Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
// console.log(allLessons());

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const valorTotal = () =>
  allLessons().lesson1.numeroEstudantes +
  allLessons().lesson2.numeroEstudantes +
  allLessons().lesson3.numeroEstudantes;

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (objeto, index) => Object.values(objeto)[index];
// console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles:
// o objeto, o nome da chave e o valor da chave. Exemplo:


const verifyPair = (objeto, key, value) => {
  const arr = Object.entries(objeto);
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value)
    return true;
  }
  return false;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false



//  testar o 'Object.keys(objeto)[index] === chave'


// const verifyPair = (objeto, chave, valor) => {
//   for (let index = 0; index < Object.keys(objeto).length; index += 1) {
//     if (Object.keys(objeto)[index] === chave && objeto[chave] === valor) {
//       return true;
//     }
//     console.log(objeto, 'parametro');
//     console.log(Object.keys(objeto), 'keys')
//     console.log(Object.keys(objeto)[index], 'index')
    
//     return false;
//   }
// };