	const todoList = document.querySelector('#todo-list');
	const form = document.querySelector('form');

	const todoItems = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < todoItems.length; i++) {
	let newLi = document.createElement('li');
	let newButton = document.createElement('button');
	newButton.innerText = 'X';
	newLi.innerText = todoItems[i].todo;
	newLi.append(newButton);
	todoList.appendChild(newLi);
}

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const newTodo = document.querySelector('#new-todo');
		const newButton = document.createElement('button');
		const checked = document.createElement('INPUT');
		const newLi = document.createElement('li');
		const todoCopy = document.querySelector('#todo-copy');
		
		checked.setAttribute('type', 'checkbox');
		newLi.innerText = newTodo.value;
		todoCopy.append(newLi.innerText);
		newButton.innerText = 'X';
		newLi.append(newButton);
		newLi.append(checked);
		todoList.append(newLi);
		todoItems.push({ todo: todoCopy.innerText, done: false});
		localStorage.setItem('todos', JSON.stringify(todoItems));
	});

	todoList.addEventListener('click', function (e) {
		if (e.target.tagName === 'BUTTON') {
			e.target.parentElement.remove();
		}
		if (e.target.tagName === 'INPUT') {
			e.target.parentElement.classList.toggle('crossed');
		}
		for (let i = 0; i < todoItems.length; i++) {
			if (todoItems[i].todo === e.target.innerText) {
				localStorage.setItem('todos', JSON.stringify(todoItems));
			}
		}
	});


