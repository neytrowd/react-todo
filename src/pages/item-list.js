import {Component, Fragment} from 'react';
import TodoList from "../components/todo-list/todo-list";
import ItemChangeForm from "../components/item-change-form";
import ItemStatusFilter from "../components/item-status-filter";

export default class ItemList extends Component {

    state = {
        isOpen: false,
        item: {}
    }

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[idx];
        const value = !oldItem[propName];
        const item = {...arr[idx], [propName]: value};
        return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
    };

    filterItems = (items, filter) => {
        if (filter === 'all') {
            return items;
        } else if (filter === 'active') {
            return items.filter((item) => (!item.done));
        } else if (filter === 'done') {
            return items.filter((item) => item.done);
        }
    }


    onFilterChange = (filter) => {
        this.props.changeState((state) => {
            return {filter}
        })
    }

    onToggleImportant = (idx) => {
        this.props.changeState((state) => {
            const items = this.toggleProperty(state.items, idx, 'important');
            return {items};
        });
    }

    onToggleDone = (id) => {
        this.props.changeState((state) => {
            const items = this.toggleProperty(state.items, id, 'done');
            return {items};
        });
    };

    onDelete = (id) => {
        this.props.changeState((state) => {
            const idx = state.items.findIndex((item) => item.id === id);
            const items = [
                ...state.items.slice(0, idx),
                ...state.items.slice(idx + 1)
            ];
            return {items};
        });
    };

    onClose = () => {
        this.setState((state) => {
            return {
                item: {},
                isOpen: false
            }
        })
    }

    onOpen = (item) => {
        this.setState((state) => {
            return {
                item,
                isOpen: true
            }
        })
    }

    onSave = (data) => {
        if(data.label && data.desc){
            const {items} = this.props.state;
            let idx = items.findIndex(item => item.id === this.state.item.id);
            items[idx] = {
                ...items[idx], ...data
            }
            this.props.changeState({items})
        }
    }

    render() {
        let {items, filter} = this.props.state;
        let visibleItems = this.filterItems(items, filter);

        return (
            <Fragment>
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <TodoList
                    items={visibleItems}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    onDelete={this.onDelete}
                    onOpen={this.onOpen}
                />
                <ItemChangeForm
                    open={this.state.isOpen}
                    item={this.state.item}
                    onClose={this.onClose}
                    onSave={this.onSave}
                />
            </Fragment>
        )
    }
}

