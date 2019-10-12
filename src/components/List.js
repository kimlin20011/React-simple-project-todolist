import React, { Component } from 'react'

export default class List extends Component {
    render() {
        console.log(this.props.todos)
        //ol = order list
        return (
            <ol>
                {
                    this.props.todos.map((todo, index) => { //todo:陣列中值，index：索引
                        return (
                            <li
                                key={todo.id}
                                onClick={() => this.props.removeTodo(todo.id)}
                            >
                                {todo.text} 
                            </li>
                        )
                    })
                }
            </ol>
        ) 
    }
}
