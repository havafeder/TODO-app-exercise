const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
const newLi = document.createElement('li');

const todoItems = JSON.parse(localStorage.getItem('todos'));
for (let i = 0; i < todoItems.length; i++){
	newLi.innerText = todoItems[i].todo;
	todoList.appendChild(newLi);
}
	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const newTodo = document.querySelector('#new - todo');
		const newButton = document.createElement('button');
		const checked = document.createElement('INPUT');
	
		checked.setAttribute('type', 'checkbox');
		newLi.innerText = newTodo.value;
		newButton.innerText = 'Remove';
		newLi.append(newButton);
		newLi.append(checked);
		todoList.append(newLi);
		todoItems.push({ done: newLi.innerText });
		localStorage.setItem('todos', JSON.stringify(todoItems));
	});

todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
	if (e.target.tagName === 'INPUT') {
		e.target.parentElement.classList.toggle('crossed');
	}
	for (let i = 0; i < todoItems.length; i++){
		if (todoItems[i].todo === e.target.innerText) {
			localStorage.setItem('todos', JSON.stringify(todoItems));
		}
	}
});







