import './tasks-filter.css';
import React, { Component } from 'react';


export class TasksFilter extends Component {
    render() {
        return (
            <><ul class="filters">
                <li>
                    <button class="selected">All</button>
                </li>
                <li>
                    <button>Active</button>
                </li>
                <li>
                    <button>Completed</button>
                </li>
            </ul><button class="clear-completed">Clear completed</button></>
        );
    }
}
