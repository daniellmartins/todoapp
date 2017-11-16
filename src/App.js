import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      description: '', 
      todos: JSON.parse(window.localStorage.getItem('todos')) || {}
    }

    this._addTodo = this._addTodo.bind(this)
    this._doneTodo = this._doneTodo.bind(this)
    this._removeTodo = this._removeTodo.bind(this)
    this._description = this._description.bind(this)
  }
  
  _description(description) {
    this.setState({ description: description.target.value })
  }

  _addTodo() {
    if (this.state.description) {
      let todos = this.state.todos
      todos[Date.now()] = { description: this.state.description, done: false }
      window.localStorage.setItem('todos', JSON.stringify(todos))
      this.setState({ todos, description: '' })
    }
  }

  _doneTodo(todo) {
    if (this.state.todos) {
      let todos = this.state.todos
      todos[todo] = { ...todos[todo], done: true }
      window.localStorage.setItem('todos', JSON.stringify(todos))
      this.setState({ todos })
    }
  }

  _removeTodo(todo) {
    if (this.state.todos) {
      let todos = this.state.todos
      delete todos[todo]
      window.localStorage.setItem('todos', JSON.stringify(todos))
      this.setState({ todos })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TodoApp</h1>
        <hr/>
        <div>
          <input value={this.state.description} onChange={this._description} type="text" placeholder="Ex: Comprar presente amanhã as 18h"/>
          <button onClick={() => this._addTodo()} className="btn-add-todo">+</button>
        </div>
        <div>
          <table>
            <tbody>
              {Object.keys(this.state.todos).map(key => (
                <tr key={key}>
                  <td className="description">{this.state.todos[key].description}</td>
                  {!this.state.todos[key].done && <td><button onClick={() => this._doneTodo(key)} className="btn-todo">&#10003;</button></td>}
                  {this.state.todos[key].done && <td><button onClick={() => this._removeTodo(key)} className="btn-todo">&#10799;</button></td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
