import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: "放學"
        }
        this.createTodo = this.createTodo.bind(this)
    }
    createTodo() {
        if(!this.state.text){
            return
        }
        this.props.createTodo(this.state.text)
        this.setState({
            text:''
        }) 
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleKeyDown(event){   //輸入enter就代表input事件
        // if(event.keyCode === 13){
        //     this.createTodo()
        // }
        event.keyCode === 13 && this.createTodo()
    }

    render() {
        return (
            <div>
                <input
                    onChange={event => this.handleChange(event)} 
                    onKeyDown={event => this.handleKeyDown(event)}
                    value = {this.state.text}
                    />
                <button
                    onClick={this.createTodo}
                >新增</button>
            </div>
        )
    }
}
