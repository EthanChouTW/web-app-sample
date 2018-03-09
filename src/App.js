import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">welcome to react with redux</h1>
        </header>
        <Router>
        <div className="Todo-App">
          <Message message='helloe'>
          </Message>
          <TodoForm></TodoForm> 
          <Route path='/:filter?' render={({match}) => (
            <TodoList filter={match.params.filter}/>
          )}></Route>
          <Footer></Footer>
        </div>
        </Router>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App 