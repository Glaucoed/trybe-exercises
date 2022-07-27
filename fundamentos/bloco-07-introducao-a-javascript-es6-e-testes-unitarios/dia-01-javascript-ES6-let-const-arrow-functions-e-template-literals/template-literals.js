// Modo errado!
const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');

// ==============================================================
//Modo correto de se utilizar
const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

//===============================================================

// Com o template literals - Modo correto de utilizar
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');