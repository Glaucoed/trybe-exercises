/* arquivo script.js - parte 1 do conteudo

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
*/


////////////////////////////////////////////////////////////////////////////////////////////////
//                            IMPORTANTE PARA O PROJETO FOGUETE
//
///////////////////////////////////////////////////////////////////////////////////////////////

//Acesse o elemento elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta");

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta").parentNode;
ondeVoceEsta.style.backgroundColor = "rgb(76,164,109)";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
//Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "Estou inserindo o texto aqui"; // ou primeiroFilhoDoFilho.innerHTML = "<p>Estou inserindo o texto aqui </p>"; 

//Acesse o primeiroFilho a partir de pai.
document.getElementById("pai").firstElementChild

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").previousElementSibling

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").nextSibling

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").nextElementSibling

//Agora acesse o terceiroFilho a partir de pai.
document.getElementById("pai").lastElementChild.previousElementSibling

/*
//Crie um irmão para elementoOndeVoceEsta.
let localizandoElementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta").parentElement;
let criaSection =  document.createElement('section'); // Cria o elemento section
localizandoElementoOndeVoceEsta.appendChild(criaSection); // Cria o elemento section dentro do pai

//Crie um filho para elementoOndeVoceEsta.
let localizaFilho = document.querySelector("#elementoOndeVoceEsta").firstElementChild;
localizaFilho.appendChild(criaSection);


//Crie um filho para primeiroFilhoDoFilho.
let localizaPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').firstElementChild;
localizaFilho.id = 'filhoPrimeiroFilhoDoFilho';
*/

    // 1. Crie um irmão para `elementoOndeVoceEsta`.
    const pai = document.getElementById('pai');
    const irmaoElementoOndeVoceEsta = document.createElement('section');
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElementoOndeVoceEsta);

    // 2. Crie um filho para `elementoOndeVoceEsta`.
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
    const filhoElementoOndeVoceEsta = document.createElement('section');
    filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
    elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

    // 3. Crie um filho para `primeiroFilhoDoFilho`.
    const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
    const filhoPrimeiroFilhoDoFilho = document.createElement('section');
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

    // 4. A partir desse filho criado, acesse `terceiroFilho`.
    const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);


