function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//🚀 Exercício 1:

function createDays() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let decemberDay = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    // console.log(decemberDaysList[index]); // mostou no console e está funcionando o for
    let day = decemberDaysList[index];
    dayListItem = document.createElement("li");
    dayListItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayListItem.classList = "day holiday";
      decemberDay.appendChild(dayListItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayListItem.classList = "day friday";
      decemberDay.appendChild(dayListItem);
    } else if (day === 25) {
      dayListItem.classList = "day holiday friday";
      decemberDay.appendChild(dayListItem);
    } else {
      dayListItem.classList = "day";
      decemberDay.appendChild(dayListItem);
    }
  }
}
createDays();

//🚀 Exercício 2:

function createHolidayButton(recebeParametro) {
  let localClasse = document.querySelector(".buttons-container");
  let novoButton = document.createElement("button");
  novoButton.innerHTML = recebeParametro;
  //novoButton.id = 'btn-holiday'; ou com setAttribute, exemplo abaixo
  novoButton.setAttribute("id", "btn-holiday"); // primeiro valor e o segundo paramentro
  localClasse.appendChild(novoButton);
}
createHolidayButton("Feriados");

//🚀 Exercício 3:

function alteraBackgroundButton() {
  let buttonAction = document.querySelector("#btn-holiday");
  let localizaClassHoliday = document.querySelectorAll(".holiday");
  let colorPadrao = "rgb(238,238,238)";
  let novaColor = "red";

  buttonAction.addEventListener("click", function () {
    for (let index = 0; index < localizaClassHoliday.length; index += 1) {
      if (localizaClassHoliday[index].style.backgroundColor === novaColor) {
        localizaClassHoliday[index].style.backgroundColor = colorPadrao;
      } else {
        localizaClassHoliday[index].style.backgroundColor = novaColor;
      }
    }
  });
}
alteraBackgroundButton();

// 🚀 Exercício 4:

function criaBotao(newbutton, newid) {
  // let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  let buttonsContainer = document.querySelector(".buttons-container");
  let btnCriacao = document.createElement("button");
  btnCriacao.innerText = newbutton;
  btnCriacao.id = newid;
  buttonsContainer.appendChild(btnCriacao);
}
criaBotao("Sexta-feira", "btn-friday");

// 🚀 Exercício 5:

function mudaTextoSexta(string) {
  let buttonSexta = document.getElementById("btn-friday");
  let classFriday = document.getElementsByClassName("friday");
  let retornaDias = [];

  for (let index = 0; index < classFriday.length; index += 1) {
    retornaDias[index] = classFriday[index].innerText;
  }

  buttonSexta.addEventListener("click", function () {
    for (let index = 0; index < classFriday.length; index += 1) {
      if (classFriday[index].innerText !== string) {
        classFriday[index].innerText = string;
      } else {
        classFriday[index].innerText = retornaDias[index];
      }
    }
  });
}
mudaTextoSexta("SEXTOU");

//🚀 Exercício 6:

let selecinarDias = document.getElementById("days");
let dias = document.getElementsByClassName("day");

for (let index = 0; index < dias.length; index += 1) {
  selecinarDias.addEventListener("mouseover", zoomIn);
  selecinarDias.addEventListener("mouseout", zoomOut);
}

function zoomIn(event) {
  // event.target.style.fontSize = '40px';
  event.target.classList.add("diaZoom");
}

function zoomOut(event) {
  // event.target.style.fontSize = '20px';
  event.target.classList.remove("diaZoom");
}

//🚀 Exercício 7:

function adicionaTarefas(string) {
  let listaTarefas = document.querySelector(".my-tasks");
  let tarefas = document.createElement("span");
  tarefas.innerText = string;
  listaTarefas.appendChild(tarefas);
}

adicionaTarefas("cozinha");

//🚀 Exercício 8:

function corLegenda(cor) {
  let listaTarefas = document.querySelector(".my-tasks");
  let coresTarefas = document.createElement("div");

  coresTarefas.className = "task";
  coresTarefas.style.backgroundColor = cor;

  listaTarefas.appendChild(coresTarefas);
}
corLegenda("red");

// 🚀 Exercício 9:

let coresTarefas = document.querySelector(".task");
coresTarefas.addEventListener("click", atribuiClasse);

function atribuiClasse() {
  if (coresTarefas.classList.contains("selected")) {
    coresTarefas.classList.remove("selected");
  } else {
    coresTarefas.classList.add("selected");
  }
}

//🚀 Exercício 10:

// dias - foi usado no exercicio Exercício 6
for (let index = 0; index < dias.length; index += 1) {
  dias[index].addEventListener("click", adicionarCor);
}

/*
for (let index of dias) {
  index.addEventListener("click", addColor);
}
*/

function adicionarCor(event) {
  let selecionado = document.querySelector(".selected");
  if (selecionado !== null) {
    if (selecionado.style.backgroundColor === event.target.style.color) {
      event.target.style.color = "rgb(119, 119, 119)";
    } else {
      event.target.style.color = selecionado.style.backgroundColor;
    }
  }
}

// 🚀 Bônus:

let botaoAdicinar = document.getElementById("btn-add");
let inputCompromisso = document.getElementById("task-input");
botaoAdicinar.addEventListener("click", adicionaCompromissoBotao);
inputCompromisso.addEventListener("keyup", adicionaCompromissoEnter);

function adicionaCompromissoBotao() {
  let localizaUL = document.getElementsByClassName("task-list")[0];
  let criaLi = document.createElement("li");
  criaLi.innerText = inputCompromisso.value;
  localizaUL.appendChild(criaLi);

  if (inputCompromisso.value === "") {
    alert("Insira seu compromisso");
  }
}


function adicionaCompromissoEnter(event) {
  let teclaEnter = event.key;  
  if (teclaEnter == "Enter") { 
    let localizaUL = document.getElementsByClassName("task-list")[0];
    let criaLi = document.createElement("li");
    
    criaLi.innerText = inputCompromisso.value;
    localizaUL.appendChild(criaLi);    
  
    if (inputCompromisso.value === "") {
      alert("Insira seu compromisso");
    }
    inputCompromisso.value = '';    
  }
}


/*
let cont = ['a','b','c']
for (let index of cont) {
  console.log(index); // conteudo a,b,c
}

for (let index in cont) {
  console.log(index); // indice 0,1,2
}
*/
