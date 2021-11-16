
const todoList = document.querySelector('#todo-list');
const form = document.querySelector('form');
const newLi = document.createElement('li');
const newButton = document.createElement('button');

const todoItems = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < todoItems.length; i++) {
	newLi.innerText = todoItems[i].todo;
	newButton.innerText = 'X';
	newLi.appendChild(newButton);
	todoList.appendChild(newLi);
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const newTodo = document.querySelector('#new-todo');
	const newButton = document.createElement('button');
	const newLi = document.createElement('li');

	newLi.innerText = newTodo.value;
	newButton.innerText = 'X';
	newLi.appendChild(newButton);
	todoList.appendChild(newLi);
	todoItems.push({ todo: , done: false });
	localStorage.setItem('todos', JSON.stringify(todoItems));
});

todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
	else if (e.target.tagName === 'LI') {
		e.target.parentElement.classList.toggle('crossed');
	}
	for (let i = 0; i < todoItems.length; i++) {
		if (todoItems[i].todo === e.target.innerText) {
			localStorage.setItem('todos', JSON.stringify(todoItems));
		}
	}
});
