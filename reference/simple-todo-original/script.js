const form = document.getElementById('form')
const field = document.getElementById('field')
const todoList = document.getElementById('todo-list')

form.addEventListener('submit', e => {
	e.preventDefault()

	if (field.value === '') return

	createItem(field.value)

	field.value = ''
	field.focus()
})

function createItem(text) {
	const li = `<li><span>${text}</span> <button onclick="deleteMe(this)">delete</button></li>`
	todoList.insertAdjacentHTML('beforeend', li)
}

function deleteMe(el) {
	el.parentElement.remove()
}
