import React from 'react';
import { Header } from '../header/header';
import { TaskList } from '../task-list/task-list';
import { Footer } from '../footer/footer';

export class App extends React.Component {

    list = [
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
    ];

    render() {
        return (
            <section class="todoapp">
                <Header />
                <section class="main">
                    <TaskList list={this.list} />
                    <Footer />
                </section>
            </section>
        );
    }
}