alteraCorTittle = document.getElementById("header-container")
alteraCorTittle.style.backgroundColor = "#16db65"

alteraCorFooter = document.getElementById("footer-container")
alteraCorFooter.style.backgroundColor = "#333533"

alteraCorEmergencyTask = document.getElementsByClassName("emergency-tasks")
alteraCorEmergencyTask[0].style.backgroundColor = "#e0afa0"
alteraCorNoEmergencyTask = document.getElementsByClassName("no-emergency-tasks")
alteraCorNoEmergencyTask[0].style.backgroundColor = "#f5cb5c"

alteraCorDiv = document.querySelectorAll(".no-emergency-tasks div h3")
for (index = 0; index < alteraCorDiv.lenght; index += 1) {
    console.log(alteraCorDiv[index])
}
alteraCorDivNoUrgent = document.querySelectorAll(".no-emergency-tasks div h3")
for (let index = 0; index < alteraCorDivNoUrgent.length; index += 1) {
    alteraCorDivNoUrgent[index].style.backgroundColor = "#333533"
}
alteraColorDivUrgent = document.querySelectorAll(".emergency-tasks div h3")
for (let index = 0; index < alteraColorDivUrgent.length; index+=1) {
    alteraColorDivUrgent[index].style.backgroundColor = "#9d4edd"
    
}