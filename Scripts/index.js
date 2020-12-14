const splash = document.querySelector('.splash')
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splash.classList.add('display-none')
    }, 2500)
})










const TaskInputItem = document.querySelector('#sample1');
const BtnAddItem = document.querySelector('#btn-add');
let TaskList = document.querySelector("#taskitem")
ShowTasks()
BtnAddItem.onclick = function () {
    if (TaskInputItem.value.length == 0) { //verifica se usuario digitou espaços vazios 
        alert("Os Campos Estão Vazios")
        TaskInputItem.value = ``
        TaskInputItem.focus();

    } else {

        let userData = TaskInputItem.value;
        let getitemlocalstorage = localStorage.getItem('NewToDo');

        if (getitemlocalstorage == null) {
            listArray = []
        } else {
            listArray = JSON.parse(getitemlocalstorage);
        }
        listArray.push(userData)
        localStorage.setItem('NewToDo', JSON.stringify(listArray))
        ShowTasks()
        alert("Tarefa Adicionada Com Sucesso!")
        TaskInputItem.value = ``
        TaskInputItem.focus();
    }
}


function ShowTasks() {
    let getitemlocalstorage = localStorage.getItem('NewToDo');

    if (getitemlocalstorage == null) {
        listArray = []
    } else {
        listArray = JSON.parse(getitemlocalstorage);
    }

    let liElement = '';
    listArray.forEach((element, index) => {
        liElement += `<li>
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1" style="width: 230px;">
        <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input">
        <span class="mdl-checkbox__label">
        ${element}</label></span><div id="remove-button"><button onclick='remove(${index})' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="removeItemList">
        <i class="fa fa-trash" aria-hidden="true"></i>
    </button></div>
        </li>`
    });

    TaskList.innerHTML = liElement
}
function remove(index) {
    let getitemlocalstorage = localStorage.getItem('NewToDo');
    listArray = JSON.parse(getitemlocalstorage)

    listArray.splice(index, 1)
    localStorage.setItem('NewToDo', JSON.stringify(listArray))
    ShowTasks()
    alert("Tarefa Removida Com Sucesso!")
}