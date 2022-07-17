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