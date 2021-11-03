import ReactDOM from 'react-dom';
import {Component} from 'react';
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './item-change-form.css';

export default class ItemChangeForm extends Component {

    state = {
        label: '',
        desc: '',
        color: ''
    }

    componentWillMount() {
        this.root = document.createElement('div')
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        const {onClose, onSave} = this.props;

        return ReactDOM.createPortal(
            <Modal
                center
                open={this.props.open}
                classNames={{modal: 'item-change-form'}}
                onClose={() => onClose()}
            >
                <div className="todo-list-add">

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
                    />

                    <p className={'d-flex justify-content-end mt-2'}>
                        <button
                            onClick={onClose}
                            className="btn btn-outline-secondary mr-2">Close
                        </button>
                        <button
                            onClick={() => onSave(this.state)}
                            className="btn btn-outline-secondary">Change
                        </button>
                    </p>
                </div>
            </Modal>,
            this.root
        )
    }

}