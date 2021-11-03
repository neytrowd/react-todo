import {Component} from 'react';
import './todo-list-header.css';
import {NavLink} from "react-router-dom";

export default class TodoListHeader extends Component {

    render() {
        return (
            <div className='todo-list-header'>
                <h3>Todo app</h3>
                <p>
                    <NavLink to={'/'}>List</NavLink>
                    <NavLink to={'/add'}>Add</NavLink>
                </p>
            </div>
        )
    }
}