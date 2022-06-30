// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
// https://www.w3schools.com/jsref/met_node_appendchild.asp

// Como pegar o pai dos elementos que eu quero adicionar a minha página?

// id: first

let first = document.getElementById('first');

// Como podemos criar um elemento HTML?

let blueCircle = document.createElement('div');

// Como podemos modificar esse elemento, adicionando classes CSS para ele, por exemplo!?
// circulo azul pequeno
// blueCircle.setAttribute('class', 'circle blue small');
blueCircle.className = 'circle blue small';

// Como efetivamos a inclusão do elemento criado ao HTML e deixando ele visivel na página?

first.appendChild(blueCircle);

// Posso continuar aleterando o elemento via código?

// altera o tamanho pra big
blueCircle.classList.remove('small');
blueCircle.classList.add('big');
// blueCircle.className = 'circle blue big';


// quadrado vermelho medio

let redSquare = document.createElement('div');
redSquare.className = 'red square medium';
first.appendChild(redSquare);

// circulo verde pequeno

let greenCircle = document.createElement('div');
greenCircle.className = 'green circle small';
first.appendChild(greenCircle);

// quadrado médio amarelo

let yellowSquare = document.createElement('div');
yellowSquare.className = 'yellow square medium';
first.appendChild(yellowSquare);


// ===============================================================================

// função generica

function createDiv (classes) {
  let div = document.createElement('div');
  div.className = classes;
  return div;
}

function createCircle(size, color) {
  let circle = document.createElement('div');
  circle.classList.add('circle');
  circle.classList.add(size);
  circle.classList.add(color);
  return circle;
}

first.appendChild(createDiv('circle red small'));
// ===============================================================================
let greenSquare = createDiv('square green medium');
first.appendChild(greenSquare);

first.appendChild(createCircle('big', 'yellow'));
first.appendChild(createCircle('medium', 'red'));
first.appendChild(createCircle('small', 'green'));

first.removeChild(greenSquare);

// Vamos deixar nosso código mais organizado criando funções para matar a 'repetição'de código

// Como posso remover um elemento do HTML via código?

// Habilidades e funções vistas no dia de hoje:
// createElement;
// appendChild;
// remove
// removeChild;
// parentNode;
// childNodes;
// children;
// firstChild;
// firstElementChild;
// lastChild;
// lastElementChild;
// nextSibling
// nextElementSibling;
// previousSibling
// previousElementSibling;