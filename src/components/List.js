import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux';  //將store裡面的state傳送進來
import { removeTodo } from '../actions';



const Clickable = styled.span`
cursor: pointer;
`;

const TodoText = styled.span`  
color: ${(props) => { return props.color || 'blue' }};
`;

//飛入動畫
const slideInFromRight = keyframes`
from {
  margin-left: 100%
}
to {
   margin-left: 0%
}
`

const TodoItem = styled.h3`
border-bottom: 1px #777777 solid;
margin-bottom: 15px;
padding-bottom: 5px;
animation: ${slideInFromRight} 0.1s linear 1;
@media (max-width: 700px) {
    background: palevioletred;
  }
`;


//@media css中，透過不同的螢幕長寬來達到不同的效果



class List extends Component {
    render() {
        console.log(this.props.todos)
        //ol = order list
        return (
            <ol>
                {
                    this.props.todos.map((todo, index) => { //todo:陣列中值，index：索引
                        return (<TodoItem ><TodoText ><Clickable>
                            <li
                                key={todo.id}
                                onClick={() => this.props.removeTodo(todo.id)}
                            >
                                {todo.text}
                            </li>
                        </Clickable>
                        </TodoText>
                        </TodoItem>
                        )
                    })
                }
            </ol>
        )
    }
}


//都是回傳物件
const mapStateToProps = state => {
    return {
        todos: state.todos  //看component內可以用this.props.todos拿到
    }
}


//action是寫什麼名字，就回傳什麼名字
const mapDispatchToProps = dispatch => {
    //dispatch =>執行action
    //點擊代辦事項內容，可以把代辦事項刪除 
    return {
        removeTodo: id => {
            dispatch(removeTodo(id))
        }
    }
}

//用connect拿到provider提供的資料
//將component與connect連結在一起
export default connect(mapStateToProps,
    mapDispatchToProps)(List)