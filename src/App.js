import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import List from './components/List'
import { createStore } from 'redux'
import todoReducer from './reducers'
import { Provider } from 'react-redux';  //他是一個component


let store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  render() {
    return (  //將store傳到下層的組件 
      <Provider store={store}>
        <div>
          <Title />
          <Form />
          <List />
        </div>
      </Provider>
    )
  }
}


//rcc + tab