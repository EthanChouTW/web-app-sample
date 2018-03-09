import React, {Component} from 'react'
import {connect } from 'react-redux'
import {updateCurrent, saveTodo} from '../reducers/todo'


class TodoForm extends Component {
    handleInputChange = (evt) => {
        const val = evt.target.value
        console.log(val)
        this.props.updateCurrent(val)
    }

    handleSubmit = (evt) => {
        console.log(this.props.currentTodo)
        evt.preventDefault() 
        this.props.saveTodo(this.props.currentTodo)
    }

    render() {
        const {currentTodo} = this.props
        return (
            <form onSubmit={this.handleSubmit} action="">
                <input type="text"
                onChange={this.handleInputChange}
                value={currentTodo} />
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.todo.currentTodo}),
    {updateCurrent, saveTodo}
)(TodoForm)
