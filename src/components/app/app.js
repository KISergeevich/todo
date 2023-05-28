import React, { Component } from 'react';
import { Header } from '../header/header';
import { TaskList } from '../task-list/task-list';
import { Footer } from '../footer/footer';
import './app.css';

const abb = [];

export class App extends Component {

    state = {
        list: this.filterFunction(abb, "All"),
        filter: "All",
        rawList: abb,
        count: this.filterFunction(abb, "Active").length
    };

    createToDoItem(inputValue) {
        return (
            {
                name: inputValue,
                date: new Date(),
                completed: false
            }
        )
    }

    addItem(inputValue) {
        const newItem = this.createToDoItem(inputValue);
        this.setState((state) => {
            const newArr = [
                ...state.rawList,
                newItem
            ];
            return {
                ...state,
                rawList: newArr,
                list: this.filterFunction(newArr, state.filter)
            };
        });
    }

    onDelete(task) {
        this.setState((state) => {
            const newArr = state.rawList.filter((item) => item !== task);
            return {
                ...state,
                rawList: newArr,
                list: this.filterFunction(newArr, state.filter),
                count: this.filterFunction(newArr, "Active").length
            };
        });
    }

    onChange(task) {
        this.setState((state) => {
            const newArr = state.rawList.map((item) => (item === task)
                ? {
                    ...item,
                    completed: !item.completed
                }
                : item
            )
            return {
                ...state,
                rawList: newArr,
                list: this.filterFunction(newArr, state.filter),
                count: this.filterFunction(newArr, "Active").length
            }
        });
    }

    onFilterChange(filterValue) {
        this.setState((state) => ({
            ...state,
            list: this.filterFunction(state.rawList, filterValue),
            filter: filterValue
        })
        )
    }

    filterFunction(arr, filterValue) {
        return arr.filter((item) => {
            if (filterValue === "All") {
                return true;
            } else if (filterValue === "Active") {
                return !item.completed;
            } else if (filterValue === "Completed") {
                return item.completed;
            }
            return false;
        });
    }

    clearComplete() {
        this.setState((state) => {
            const newArr = this.state.rawList.filter((item) => item.completed === false);
            return {
                ...state,
                rawList: newArr,
                list: this.filterFunction(newArr, state.filter)
            }
        })
    }

    render() {
        return (
            <section className="todoapp">
                <Header list={this.state.list}
                    onInputChange={(inputValue) => this.addItem(inputValue)}
                />
                <section className="main">
                    <TaskList list={this.state.list}
                        onDelete={(task) => this.onDelete(task)}
                        onChange={(task) => this.onChange(task)}
                    />
                    <Footer filter={this.state.filter}
                        onFilterChange={(filterValue) => this.onFilterChange(filterValue)}
                        count={this.state.count}
                        clearComplete={() => this.clearComplete()}
                        key={this.state.list.date}
                    />
                </section>
            </section>
        );
    }
}