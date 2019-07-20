import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    addTodo(todo) {
        const todos = [...this.state.todos]
        todos.push(todo);
        this.setState({ todos });

    }
    deleteTodo(id) {
        let todos = [...this.state.todos]
        todos = todos.filter(todo => {
            return todo.id !== id;
        })
        this.setState({ todos });
    }
    editTodo({id,text}) {
        let todos = [...this.state.todos]
        todos = todos.filter(todo => {
            return todo.id !== id;
        })
        todos.push({id,text});
        this.setState({ todos });

    }
    render() {
        return (
            <div className="todoContainer">
                <h2>Todo List</h2>
                <h3>A simple React Todo List App</h3>
                <NewTodoForm add={this.addTodo} />
                <h3>My Todos</h3>
                {this.state.todos.map(todo => {
                    return <Todo key={todo.id} id={todo.id} text={todo.text} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
                })}

            </div>
        )
    }
}

export default TodoList
