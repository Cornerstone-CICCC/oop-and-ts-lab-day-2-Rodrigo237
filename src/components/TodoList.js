import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoList extends Component {
  render() {
    this.todoListElement = document.createElement('div')
    this.todoListElement.className = "todo-list"

    this.renderTodos(todoContext.todos);

    todoContext.subscribe(this.renderTodos.bind(this))

    return this.todoListElement;
  }

  renderTodos = (todos) => {
    this.todoListElement.innerHTML = "";
    todos.forEach((todo, idx) => {
      const item = new TodoItem(todo, idx).render();
      this.todoListElement.appendChild(item);
    });
  }
}