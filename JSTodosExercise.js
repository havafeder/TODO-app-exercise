const todoList = document.querySelector('#todo-list');
const form = document.querySelector('form');
const newTodo = document.createElement('li');
const newButton = document.createElement('button');
const newCheck = document.createElement('input');
newCheck.type = "checkbox";

const todoItems = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < todoItems.length; i++) {
	newTodo.innerText = todoItems[i].todo;
	newButton.innerText = 'X';
	newTodo.appendChild(newCheck);
	todoList.appendChild(newTodo);
	newTodo.appendChild(newButton);
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const addTodo = document.querySelector('#new-todo');
	const newTodo = document.createElement('li');
	const newButton = document.createElement('button');
	const newCheck = document.createElement('input');
	newCheck.type = "checkbox";

	newTodo.innerText = addTodo.value;
	newButton.innerText = 'X';
	newTodo.appendChild(newCheck);
	todoList.appendChild(newTodo);
	newTodo.appendChild(newButton);
	todoItems.push({ todo: newTodo.innerText, done: false });
	localStorage.setItem('todos', JSON.stringify(todoItems));
});

todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
	else if (e.target.tagName === 'INPUT') {
		e.target.parentElement.classList.toggle('crossed');
	}
	for (let i = 0; i < todoItems.length; i++) {
		if (todoItems[i].todo === e.target.innerText) {
			localStorage.setItem('todos', JSON.stringify(todoItems));
		}
	}
});

