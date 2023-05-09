import React, { Component } from 'react';
import { Header } from '../header/header';
import { TaskList } from '../task-list/task-list';
import { Footer } from '../footer/footer';
import './app.css';


export class App extends Component {

    state = {
        list: [
            {
                name: "Completed Task",
                date: new Date('2023-05-02 17:46'),
                completed: true
            },
            {
                name: "Editing Task",
                date: new Date('2023-05-02 09:46'),
                completed: false
            },
            {
                name: "Active Task",
                date: new Date('2023-05-02 13:46'),
                completed: false
            }
        ]
    };

    onDelete(task) {
        this.setState((state) => ({
            ...state,
            list: state.list.filter((item) => item !== task)
        }));
    }

    onChange(task) {
        this.setState((state) => ({
            ...state,
            list: state.list.map((item) => (item === task)
                ? {
                    ...item,
                    completed: !item.completed
                }
                : item
            )
        }));
    }

    render() {
        return (
            <section className="todoapp">
                <Header />
                <section className="main">
                    <TaskList list={this.state.list} onDelete={(task) => this.onDelete(task)} onChange={(task) => this.onChange(task)} />
                    <Footer />
                </section>
            </section>
        );
    }
}