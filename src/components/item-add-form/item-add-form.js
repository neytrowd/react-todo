import {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: '',
        desc: '',
        color: '#000',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {label, desc, color} = this.state;
        this.setState({label: '', desc: '', color: '#000'});
        this.props.onItemAdded(label, desc, color);
    };

    render() {
        return (
            <form
                className="todo-list-add"
                onSubmit={this.onSubmit}>

                <p className={'d-flex justify-content-between'}>
                    <input
                        type="text"
                        className="form-control new-todo-label"
                        value={this.state.label}
                        onChange={this.onChange}
                        placeholder="Name"
                        name='label'
                    />
                    <input
                        type="color"
                        className="form-control new-todo-color"
                        title="Choose your color"
                        name='color'
                        onChange={this.onChange}
                        value={this.state.color}
                    />
                </p>

                <textarea
                    className="form-control new-todo-desc"
                    name='desc'
                    onChange={this.onChange}
                    placeholder="Description"
                    value={this.state.desc}
                    rows={5}
                />

                <p className={'d-flex justify-content-end mt-2'}>
                    <button
                        type="submit"
                        className="btn btn-outline-secondary">Add
                    </button>
                </p>
            </form>
        )
    }
}