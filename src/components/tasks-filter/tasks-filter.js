import './tasks-filter.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TasksFilter extends Component {

    static defaultProps = {
        onChange: () => { },
        clearComplete: () => { },
    }

    static propTypes = {
        onChange: PropTypes.func,
        clearComplete: PropTypes.func
    }

    onClick(filterValue) {
        this.props.onChange(filterValue);
    }

    clearComplete() {
        this.props.clearComplete();
    }

    render() {
        return (
            <><ul className="filters">
                <li>
                    <button className={this.props.filter === "All" ? "selected" : ""}
                        onClick={() => this.onClick("All")}>
                        All
                    </button>
                </li>
                <li>
                    <button className={this.props.filter === "Active" ? "selected" : ""}
                        onClick={() => this.onClick("Active")}>
                        Active
                    </button>
                </li>
                <li>
                    <button className={this.props.filter === "Completed" ? "selected" : ""}
                        onClick={() => this.onClick("Completed")}>
                        Completed
                    </button>
                </li>
            </ul > <button className="clear-completed"
                onClick={() => this.clearComplete()}>
                    Clear completed
                </button></>
        );
    }
}
