const btnSubmit = document.getElementById("btnSubmit");
const TodoListDiv = document.getElementById('TodoList');
let todoTbody = document.getElementById('todoTbody');
const inputData = document.getElementById("input");


btnSubmit.addEventListener('click', addTodoData);


let todoList = JSON.parse(localStorage.getItem("todos")) || [];



console.log(todoList.length)

function addTodoData() {
    const inputData = document.getElementById("input").value

    // Create payload
    const payload = {
        todo: inputData,
        status: false,
        id: Date.now() + inputData
    };

    todoList.push(payload);
    localStorage.setItem('todos', JSON.stringify(todoList));
    // console.log(todoList)

    append(todoList);
}
append(todoList);

function append(data) {
    inputData.value = null;
    todoTbody.innerHTML = null;

    data.map((el, index) => {

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const h3 = document.createElement('h3');
        h3.setAttribute("id", "todoName");
        h3.innerText = el.todo

        td1.append(h3)

        const td2 = document.createElement('td');
        const btnStatus = document.createElement("button");
        btnStatus.setAttribute("id", "btnStatus")
        btnStatus.setAttribute("class", "btnSt");
        btnStatus.innerText = "Not Done";

        if (el.status !== true) {
            btnStatus.innerText = "Not Done";
        } else {
            btnStatus.innerText = "Done";
            btnStatus.style.background = 'green'
        }

        // update Todo Status 
        td2.append(btnStatus)
        btnStatus.addEventListener('click', () => {
            todoStatus(el.id);
        })

        const td3 = document.createElement('td');
        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "btnDelete")
        btnDelete.setAttribute("class", "btndel");
        btnDelete.innerText = "Delete";

        // delete Functionality
        btnDelete.addEventListener('click', () => {
            deleteTodo(el.id);
        });

        td3.append(btnDelete)

        tr.append(td1, td2, td3);
        todoTbody.append(tr);

    });

    if (todoList.length != 0) {
        TodoListDiv.style.display = "block"

    } else {

        TodoListDiv.style.display = "none"

    }
}


// delete Function

// function deleteTodo(index) {
//     // alert("hello")
//     todoList.splice(index, 1)
//     localStorage.setItem('todos', JSON.stringify(todoList));
//     append(todoList);
// }

// delete Function Second Method;
function deleteTodo(id) {
    todoList = todoList.filter((el) => {
        return el.id !== id;

    });
    localStorage.setItem('todos', JSON.stringify(todoList));
    append(todoList);
}

// /update Status TodoList
function todoStatus(id) {
    todoList = todoList.map((el) => {
        if (el.id == id) {
            return { ...el, status: !el.status }
        } else {
            return el;
        }

    });
    localStorage.setItem('todos', JSON.stringify(todoList));
    append(todoList);

}