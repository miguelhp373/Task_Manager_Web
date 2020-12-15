const splash = document.querySelector('.splash')
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splash.classList.add('display-none')
    }, 1800)
})










const TaskInputItem = document.querySelector('#input-text-field');
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
        liElement += `
        <li>
        ${element}
        <div id="remove-button"><a onclick='remove(${index})'>Remover</a></div>
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