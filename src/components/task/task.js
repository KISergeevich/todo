import React, { Component } from 'react';
import { formatDistanceToNow } from "date-fns";
import './task.css';
import PropTypes from 'prop-types';

export class Task extends Component {

    static defaultProps = {
        onChange: () => { },
        onDelete: () => { },
        task: {}
    }

    static propTypes = {
        onChange: PropTypes.func,
        onDelete: PropTypes.func,
        task: PropTypes.object
    }

    onChange() {
        this.props.onChange(this.props.task);
    }

    onDelete() {
        this.props.onDelete(this.props.task);
    }

    render() {
        const { task } = this.props;
        return (
            <li className={task.completed ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={task.completed} onChange={() => this.onChange()} />
                    <label>
                        <span className="description">{task.name}</span>
                        <span className="created">{formatDistanceToNow(task.date, { addSuffix: true })}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={() => this.onDelete()}></button>
                </div>
            </li>
        );
        // return (
        //     <li class="editing">
        //             <div class="view">
        //                 <input class="toggle" type="checkbox" />
        //                 <label>
        //                     <span class="description">Editing task</span>
        //                     <span class="created">created 5 minutes ago</span>
        //                 </label>
        //                 <button class="icon icon-edit"></button>
        //                 <button class="icon icon-destroy"></button>
        //             </div>
        //             <input type="text" class="edit" value="Editing task" />
        //         </li>
        // );
    }
}

