let todoList = []

function addTodo(){
    let inputElement = document.getElementById('todo_input')
    let dateElement = document.getElementById('todo_date')
    let todoItem = inputElement.value 
    let todoDate = dateElement.value
    todoList.push({
        item: todoItem,
        dueDate: todoDate
    })
    inputElement.value = ''
    dateElement.value = ''
    displayItems()
}

function displayItems(){
    let containerElement = document.querySelector('.todo_container');

    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){
        newHtml += 
        `
        <span>${todoList[i].item}</span>
        <span>${todoList[i].dueDate}</span>
        <button class="btn_delete" onclick="
        todoList.splice(${i},1);
        displayItems()">Delete</button>
        `
    }
    containerElement.innerHTML = newHtml
}