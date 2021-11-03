import './todo-list-item.css';

export default function TodoListItem({important, done, label, desc, color, onToggleImportant, onToggleDone, onDelete, onOpen}) {
    let classNames = 'todo-list-item';

    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }

    return (
        <span className={classNames}>
              <p
                  style={{color: color}}
                  className="todo-list-item-label"
                  onClick={onToggleDone}>
                  {label} : {desc} {important && '-- !!! --'}
              </p>
              <p>
                  <button type="button"
                          className="btn btn-outline-success btn-sm float-right"
                          onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                  </button>

                  <button type="button"
                          className="btn btn-outline-danger btn-sm float-right"
                          onClick={onDelete}>
                    <i className="fa fa-trash-o"/>
                  </button>
                  <button type="button"
                          className="btn btn-outline-primary btn-sm float-right"
                          onClick={onOpen}>
                    <i className="fa fa-pencil"/>
                  </button>
              </p>
        </span>
    )
}