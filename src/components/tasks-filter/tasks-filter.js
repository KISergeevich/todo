import './tasks-filter.css';
import React, { Component } from 'react';


export class TasksFilter extends Component {
    render() {
        return (
            <><ul className="filters">
                <li>
                    <button className="selected">All</button>
                </li>
                <li>
                    <button>Active</button>
                </li>
                <li>
                    <button>Completed</button>
                </li>
            </ul><button className="clear-completed">Clear completed</button></>
        );
    }
}
