import TodoListItem from "../todo-list-item";

export default function TodoList({items, onToggleImportant, onToggleDone, onDelete, onOpen}) {

    return (
        <ul className={'list-group'}>
            {items.map(item => {
                const {id, ...itemProps} = item;

                return (
                    <li key={id} className={'list-group-item'}>
                        <TodoListItem
                            {...itemProps}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleDone={() => onToggleDone(id)}
                            onDelete={() => onDelete(id)}
                            onOpen={() => onOpen(item)}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

