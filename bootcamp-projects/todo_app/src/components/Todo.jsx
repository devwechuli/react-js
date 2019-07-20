import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            todo: this.props.text,
            todoCompletion: false
        }
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleTodochange = this.handleTodochange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOpenEditForm = this.handleOpenEditForm.bind(this);
        this.handleTodoCompletion = this.handleTodoCompletion.bind(this);
    }
    handleFormSubmit() {
        this.props.editTodo({ id: this.props.id, text: this.state.todo })
        this.setState({ edit: false });
    }
    handleTodochange(e) {
        this.setState({ todo: e.target.value });
    }
    handleDeleteClick() {
        this.props.deleteTodo(this.props.id);
    }
    handleOpenEditForm() {
        this.setState({ edit: !this.state.edit });
    }
    handleTodoCompletion() {
        this.setState({ todoCompletion: !this.state.todoCompletion });
    }
    render() {
        const { id, text } = this.props;
        return (
            <React.Fragment>
                <div className="todo">
                    <span style={{ textDecoration: this.state.todoCompletion ? ("line-through") : "none" }} onClick={this.handleTodoCompletion} className="todoSpan">{text}

                    </span>

                    <span className="icons">
                        <i onClick={this.handleOpenEditForm} className="fas fa-pencil-alt"></i> <i onClick={this.handleDeleteClick} className="fas fa-archive"></i>
                    </span>


                </div>
                {this.state.edit ? (<div className="todoEdit">
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" name="todo" id="todo" value={this.state.todo} onChange={this.handleTodochange} placeholder="Edit Todo" required />
                        <button>Edit Todo</button>
                    </form>
                </div>) : (null)}
            </React.Fragment>

        )
    }
}

export default Todo
