
/// numeros PAR

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });


  // Numeros Impares e PAR

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');
    }
};

const isOdd = (number) => {
    if ((number % 2) > 0) {
        console.log(number, 'is odd');
    }
};

  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;
  
  //


  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator)