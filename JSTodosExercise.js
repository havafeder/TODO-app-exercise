
	const todoList = document.querySelector('#todo-list');
	const form = document.querySelector('form');
	
	const todoItems = JSON.parse(localStorage.getItem('todos')) || [];
	for (let i = 0; i < todoItems.length; i++) {
		const newTodo = document.createElement('li');
		const newButton = document.createElement('button');
		const newCheck = document.createElement('input');
		const todoText = document.createElement('p');
		newCheck.type = "checkbox";
		todoText.innerText = todoItems[i].todo;
		newButton.innerText = 'X';
		newTodo.appendChild(newCheck);
		newTodo.appendChild(todoText);
		todoList.appendChild(newTodo);
		newTodo.appendChild(newButton);
	};

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const addTodo = document.querySelector('#new-todo');
		const newTodo = document.createElement('li');
		const newButton = document.createElement('button');
		const newCheck = document.createElement('input');
		const todoText = document.createElement('p');
		newCheck.type = "checkbox";
   
		todoText.innerText = addTodo.value;
		newButton.innerText = 'X';
		newTodo.appendChild(newCheck);
		newTodo.appendChild(todoText);
		todoList.appendChild(newTodo);
		newTodo.appendChild(newButton);
		todoItems.push({todo: todoText.innerText, done: false})
		localStorage.setItem('todos', JSON.stringify(todoItems));
	});

	todoList.addEventListener('click', function (e) {
		if (e.target.tagName === 'BUTTON') {
			e.target.parentElement.remove();
				const items = localStorage.getItem('todos');
		const updatedItem = JSON.parse(items).filter(
			(item) => item / todo !== e.target.previousSibling.innerText
		);
		localStorage.setItem('todos', JSON.stringify(updatedItem));		}
		if (e.target.tagName === 'INPUT') {
			e.target.parentElement.classList.toggle('crossed');
			localStorage.setItem('todos', JSON.stringify(todoItems));
		}
	});
