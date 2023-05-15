import React, { Component } from 'react';
import './new-task-form.css';

export class NewTaskForm extends Component {
    state = {
        value: ''
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onInputChange(this.state.value);
        this.setState({ value: '' });
    }

    onInputChange(e) {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <form className="form-class"
                onSubmit={(e) => this.onSubmit(e)}>
                <input className="new-todo"
                    type='text'
                    placeholder="What needs to be done?"
                    autoFocus
                    value={this.state.value}
                    onChange={(e) => this.onInputChange(e)} />
            </form>
        )
    }
}