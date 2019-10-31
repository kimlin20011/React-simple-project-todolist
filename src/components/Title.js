import React, { Component } from 'react'
import { connect } from 'react-redux';


class Title extends Component {
    render() {
        return (
            <h2>待辦事項清單({this.props.todos.length})</h2>
        )
    }
}


//都是回傳物件
const mapStateToProps = state => {
    return {
        todos: state.todos  //看component內可以用this.props.todos拿到
    }
}

//用connect拿到provider提供的資料
//將component與connect連結在一起
export default connect(mapStateToProps)(Title)