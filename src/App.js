import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      description: '', 
      todos: [
        { description: 'Comprar o presente do meu irmão hoje!', done: true },
        { description: 'Ir ao supermercado fazer as compras.', done: false },
        { description: 'Assistir palestra sobre ReactJS amanhã às 11h', done: false }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TodoApp</h1>
        <hr/>
        <div>
          <input type="text" placeholder="Ex: Comprar presente amanhã as 18h"/>
          <button className="btn-add-todo">+</button>
        </div>
        <div>
          <table>
            {this.state.todos.map((todo, index) => (
              <tr>
                <td>{todo.description}</td>
                {!todo.done && <td><button className="btn-todo">&#10003;</button></td>}
                {todo.done && <td><button className="btn-todo">&#10799;</button></td>}
              </tr>
            ))}
          </table>
        </div>
      </div>
    )
  }
}

export default App
