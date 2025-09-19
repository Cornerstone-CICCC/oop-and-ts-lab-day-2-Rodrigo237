import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    const input = addElement.querySelector('#todo-input');
    const btn = addElement.querySelector('#todo-add-btn');

    btn.onclick = () => {
      const value = input.value.trim();
      if (value) {
        todoContext.addTodo(value);
        input.value = "";
      } else {
        alert('Please enter a task!');
      }
    };

    return addElement;
  }
}