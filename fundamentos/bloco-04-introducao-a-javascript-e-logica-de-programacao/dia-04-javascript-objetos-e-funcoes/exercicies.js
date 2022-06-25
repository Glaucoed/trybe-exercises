// // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem vinda, ' + info.personagem);


// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim'

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (let key in info) {
 
    console.log(key)
};

// // 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let key in info) {
 
    console.log(info[key])
};


// //5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// //'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, 
// //imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: "Christmas on Bear Mountain, Dell's Four Color Comics #178", 
    origem: 'O último MacPatinhas',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + info2.personagem)
console.log(info.origem + ' e ' + info2.origem)
console.log(info.nota + ' e ' + info2.nota)

if(JSON.stringify(info.recorrente) === JSON.stringify(info2.recorrente)){
    console.log("Ambos recorrentes")
}else{
    console.log("Ambos não são recorrentes")
};


// //////////////// outra solução /////////////////////


for (let properties in info) {
    if (properties === 'recorrente' && info[properties] === 'Sim' && info2[properties] === 'Sim') {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }


  // 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: 
  // "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      
    ],
    
  };
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
console.log(leitor.teste[0].autor);

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. 
//Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos[1] = { titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Roco' }


// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log( leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');




