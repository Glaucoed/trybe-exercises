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
