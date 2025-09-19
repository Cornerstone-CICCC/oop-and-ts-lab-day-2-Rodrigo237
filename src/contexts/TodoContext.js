export class TodoContext {
  constructor(){
    this.todos = []
    this.listeners = []
  }

  addTodo(todo){
    this.todos.push({todo, completed: false})
    this.notifyListeners()
  }

  toggleTodo(index){
    this.todos[index].completed = !this.todos[index].completed;
    this.notifyListeners()
  }

  deleteTodo(index){
    this.todos.splice(index,1)
    this.notifyListeners()
  }

  subscribe(listener){
    this.listeners.push(listener)
  }

  notifyListeners(){
    this.listeners.forEach(listener => listener(this.todos))
  }
}

export const todoContext = new TodoContext();