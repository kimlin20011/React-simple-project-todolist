import React, { Component } from 'react'
import styled, {keyframes }  from 'styled-components'

const Clickable = styled.span`
cursor: pointer;
`;

const TodoText = styled.span`  
color: ${(props) => {return props.color || 'blue'}};
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



export default class List extends Component {
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
