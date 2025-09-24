import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  constructor(todo, index) {
    super();
    this.todo = todo;
    this.index = index;
  }

  render() {
    const todoElement = document.createElement('li');
    todoElement.className = "todo-item";

    const span = document.createElement('span');
    span.textContent = this.todo.todo;
    if (this.todo.completed) {
      span.style.textDecoration = "line-through";
    }

    const btnGroup = document.createElement('div');
    btnGroup.className = "btn-group";

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = this.todo.completed ? "Mark Incomplete" : "Mark Complete";
    if (this.todo.completed) {
      toggleBtn.classList.add('incomplete-btn'); 
    }
    toggleBtn.onclick = (e) => {
      e.preventDefault();
     todoContext.toggleTodo(this.index);
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn")
    delBtn.onclick = (e) => {
      e.preventDefault();
      todoContext.deleteTodo(this.index);
    };

    btnGroup.appendChild(toggleBtn);
    btnGroup.appendChild(delBtn);

    todoElement.appendChild(span);
    todoElement.appendChild(btnGroup);

    return todoElement;
  }
}