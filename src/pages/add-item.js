import {Component, Fragment} from 'react';
import ItemAddForm from "../components/item-add-form";

export default class AddItem extends Component {

    createItem = (label, desc, color) => {
        return {
            id: Date.now(),
            label,
            desc,
            color,
            important: false,
            done: false
        };
    }

    onItemAdded = (label, desc, color) => {
        const item = this.createItem(label, desc, color);
        this.props.changeState((state) => {
            return {items: [...state.items, item]};
        })
    };

    render() {
        return (
            <Fragment>
                <ItemAddForm onItemAdded={this.onItemAdded}/>
            </Fragment>
        )
    }
}

