// Selectors
const input = document.querySelector(".input-item")
const list = document.querySelector(".todo-list")
const submitBtn = document.querySelector(".submit-btn")
// Event listeners
submitBtn.addEventListener("click", e => {
  e.preventDefault()
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")
  const newTodo = document.createElement("li")
  newTodo.innerText = input.value
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)
  const trashBtn = document.createElement("button")
  trashBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
  trashBtn.classList.add("trash-btn")
  todoDiv.appendChild(trashBtn)
  list.appendChild(todoDiv)
  input.value = ''
  todoDiv.addEventListener("click", () => {
    todoDiv.remove()
  })
})


