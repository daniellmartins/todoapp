import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TodoApp</h1>
        <hr/>
        <div>
          <input type="text" placeholder="Ex: Comprar presente amanhã as 18h"/>
          <button className="btn-add-todo">Adicionar</button>
        </div>
        <div>
          <table>
            <tr>
              <td>Comprar o presente do meu irmão hoje!</td>
              <td><button className="btn-todo">&#10003;</button></td>
              <td><button className="btn-todo">&#10799;</button></td>
            </tr>
            <tr>
              <td>Ir ao supermercado fazer as compras.</td>
              <td><button className="btn-todo">&#10003;</button></td>
              <td><button className="btn-todo">&#10799;</button></td>
            </tr>
            <tr>
              <td>Assistir palestra sobre ReactJS amanhã às 11h</td>
              <td><button className="btn-todo">&#10003;</button></td>
              <td><button className="btn-todo">&#10799;</button></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default App
