import React, { Component } from 'react'
import { createTodo } from '../actions';
import { connect } from 'react-redux';  //將store裡面的state傳送進來

class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: "放學"
        }
        this.createTodo = this.createTodo.bind(this)
    }
    createTodo() {
        if (!this.state.text) {
            return
        }
        this.props.createTodo(this.state.text)
        this.setState({
            text: ''
        })
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleKeyDown(event) {   //輸入enter就代表input事件
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
                    value={this.state.text}
                />
                <button
                    onClick={this.createTodo}
                >新增</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTodo: text => {
            dispatch(createTodo(text))
        }
    }
}

//只要處理新增，不需要接受任何資料，所以不需要mapStateToProps
//用connect拿到provider提供的資料
//將component與connect連結在一起
//null是指mapStateToProps沒有的部分
export default connect(null, mapDispatchToProps)(Form)