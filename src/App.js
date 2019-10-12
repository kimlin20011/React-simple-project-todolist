import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import List from './components/List'

export default class App extends Component {
  constructor() {
    super() //繼承component元件中的this(父class)
    let list = [
      { id: 0, text: '吃早餐' },
      { id: 1, text: '上學' },
      { id: 2, text: ' 吃午餐' },
    ]
    this.state = {
      todos: list,
      startId: 3,
    }
  }

  createTodo(text) {
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.startId,
        text: text
      }], //展開運算符
      startId:this.state.startId + 1 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  render() {
    return (
      <div>
        <Title
          todos={this.state.todos}
        />
        <Form
          createTodo={text => this.createTodo(text)}  //this = App
        />
        <List
          todos={this.state.todos}
          removeTodo={id => this.removeTodo(id)}
        />
      </div>
    )
  }
}


//rcc + tab