function init() {
  document.querySelector('.clear').addEventListener('click', clearToDo);
  document.querySelector('.todo__form').addEventListener('submit', addToDo);
  document.querySelector('.todo__item').addEventListener('click', delOrCheck);
}

init();

function delToDo(event) {
  let remove = event.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function delOrCheck(event) {
  if(event.target.className == 'delete'){
    delToDo(event);
  } else{
		checkToDo(event);
	}
}	

function checkToDo(event) {
	const todo = event.target.nextSibling;
	if(event.target.checked){
		todo.style.color = '#eeeeee';
		todo.style.textDecoration = 'line-through';
		todo.classList.add = '.delete__animation';
	} else{
		todo.style.color = '#000000';
		todo.style.textDecoration = 'none';
	}
}

function clearToDo(event) {
	let ul = document.querySelector('ul').innerHTML = "";
}

function addToDo(event) {
	event.preventDefault();
	let toDoValue = document.querySelector('input');
	if(toDoValue.value !== ''){
		addTask(toDoValue.value);
		toDoValue.value = '';
	}
}

function addTask(value) {
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	li.innerHTML = `<input type ="checkbox"><label>${value}</label><span class = "delete">🗑</span>`;
	ul.appendChild(li);
	// document.querySelector('.todo__item').style.display = 'block';
	document.querySelector('.todo__item').style.display = 'flex';
}

